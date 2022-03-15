<template>
  <div class="home_box">
    <!-- 头部 -->
    <div class="header_box flex f-y-c f-sb">
      <img class="logo" src="../assets/logo.png" alt />

      <el-dropdown @command="changeLang">
        <span class="el-dropdown-link">
          {{ lang == 'zh' ? '中文 - 繁体' : '' }}
          {{ lang == 'en' ? 'English' : '' }}
          {{ lang == 'vi' ? '越南' : '' }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
          <el-dropdown-item command="vi">Tiếng Việt</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="to_wallet" @click="toWallet">
        {{ loginStatus ? loginStatus : $t('connect_wallet') }}
      </div>
    </div>
    <!-- 阶段 -->
    <div class="step_box flex f-y-c f-x-c">
      <span v-if="step == 0">{{ $t(`step0`) }}</span>
      <span v-if="step == 1">{{ $t(`step1`) }}</span>
      <span v-if="step == 2">{{ $t(`step2`) }}</span>
      <span v-if="step == 3">{{ $t(`step3`) }}</span>
      <span v-if="step == 4">{{ $t(`step4`) }}</span>
    </div>
    <!-- 阶段图片 -->
    <div class="cover_box">
      <el-carousel
        trigger="click"
        height="150px"
        arrow="always"
        :autoplay="false"
        @change="changeCover"
      >
        <el-carousel-item v-for="(url, idx) in currentUrlList" :key="idx">
          <img :src="url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 竞拍 -->
    <div class="bid_box">
      <div class="start_bid" v-if="configData[step]">
        {{ configData[step].count_down ? $t('begin_time', { hr, min, sec }) : $t('beginning') }}
      </div>
      <div class="bid_list" v-if="configData[step]">
        <div class="bid_item">
          <span class="left">{{ $t('jinpai_time') }}</span>
          <span class="right">{{ configData[step].auction_time }}</span>
        </div>
        <div class="bid_item">
          <span class="left">{{ $t('jinpai_send') }}</span>
          <span class="right">{{ configData[step].auction_assets }}USDT</span>
        </div>
        <div class="bid_item">
          <span class="left">{{ $t('zhiyazhouqi') }}</span>
          <span class="right">{{ configData[step].pledge_time }}{{ $t('day') }}</span>
        </div>
        <div class="bid_item">
          <span class="left">{{ $t('zhiyashouyi') }}</span>
          <span class="right">{{ configData[step].purchase_income }}%</span>
        </div>
        <div class="bid_item">
          <span class="left">{{ $t('qianggouxiaohao') }}</span>
          <span class="right">1%U/MRO/{{ $t('each') }}</span>
        </div>
        <div class="bid_item">
          <span class="left">{{ $t('yuyuexiaohao') }}</span>
          <span class="right">0.5%U/MRO/{{ $t('each') }}</span>
        </div>
      </div>
      <div class="reserve" @click="toReserve" v-if="configData[step]">
        {{ configData[step].count_down ? $t('yu_yue') : $t('qianggou') }}
      </div>
      <!-- <div class="remark">余额需确保足够≥100 USDT才能预约竞拍</div> -->
      <div class="model" v-if="isShow">
        <div class="wrap_box">
          <div class="close" @click="clickCancel">X</div>
          <el-input
            v-model="amount"
            type="number"
            :placeholder="$t('please_input_num')"
            @input="handleInput"
          />
          <div class="button_box">
            <div class="btn" @click="clickCancel">{{ $t('cancel') }}</div>
            <div class="btn" @click="clickOk">{{ $t('confirm') }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 汇总数据 -->
    <div class="collect_box">
      <div class="header">
        <span>{{ $t('collect_title') }}</span>
        <div class="line"></div>
      </div>
      <div class="collect_list">
        <div class="collect_item">
          <span class="left">{{ $t('quanqiuxiaohui') }}</span>
          <span class="right">{{ collectData.mioBurn || 0 }} {{ $t('ge') }}</span>
        </div>
        <div class="collect_item">
          <span class="left">{{ $t('quanqiuhuiyuan') }}</span>
          <span class="right">{{ collectData.AddressTotol || 0 }} {{ $t('ge') }}</span>
        </div>
        <div class="collect_item">
          <span class="left">{{ $t('mysend') }}</span>
          <span class="right">{{ collectData.RecommendedMember || 0 }} {{ $t('ge') }}</span>
        </div>
        <!-- <div class="collect_item">
        <span class="left">实时团队业绩</span>
        <span class="right">{{ collectData.Team || 0 }} USDT</span>
      </div> -->
        <div class="collect_item">
          <span class="left">{{ $t('daishushouyi') }}</span>
          <span class="right">{{ collectData.AlgebraicIncome || 0 }} USDT</span>
        </div>
        <div class="collect_item">
          <span class="left">{{ $t('level') }}</span>
          <span class="right">{{ collectData.CombustionReward || 0 }} USDT</span>
        </div>

        <div class="collect_item">
          <span class="left">{{ $t('share') }}</span>
          <span class="right">
            <!--  {{ link }} -->
            <span class="click" @click="handleCopy">{{ $t('copy') }}</span>
          </span>
        </div>
        <div class="show_list">
          <div class="btn" @click="handleShowTeamList">{{ $t('team_info') }}</div>
          <div class="model" v-if="showTeamList">
            <div class="team_list">
              <div class="close" @click="closeTeamList">X</div>
              <div class="team_item title">
                <span>{{ $t('xiajidizhi') }}</span>
                <span>{{ $t('zishenyeji') }}</span>
                <span>{{ $t('tuanduiyeji') }}</span>
              </div>
              <ul
                infinite-scroll-distance="10"
                :infinite-scroll-immediate="false"
                infinite-scroll-disabled
                class="infinite-list"
                style="overflow: auto"
              >
                <template v-if="teamInfoList.length">
                  <li v-for="(item, idx) in teamInfoList" :key="idx" class="team_item">
                    <el-popover
                      placement="bottom-start"
                      :width="250"
                      trigger="click"
                      :content="item.wallet_address"
                    >
                      <template #reference>
                        <span>{{ item.intercept }}</span>
                      </template>
                    </el-popover>
                    <span>{{ item.my_achievement }} USDT</span>
                    <span>{{ item.lower_achievement }} USDT</span>
                  </li>
                </template>
                <div class="empty" v-else>{{ $t('no_data') }}</div>
              </ul>
            </div>
            <div class="left_arrow" @click="handleLoad('prev')">
              <el-icon color="#fff" :size="22">
                <arrow-left />
              </el-icon>
            </div>
            <div class="right_arrow" @click="handleLoad('next')">
              <el-icon color="#fff" :size="22">
                <arrow-right />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- poll -->
    <div class="pool_box">
      <!-- <div class="header">
      <span>狩猎池</span>
      <div class="line"></div>
    </div>-->
      <div class="pool_list">
        <div class="pool_item title">
          <span>{{ $t('jibie') }}</span>
          <span>{{ $t('yujishouyi') }}</span>
          <span>{{ $t('status') }}</span>
        </div>
        <ul
          v-infinite-scroll="handleLowerLoad"
          infinite-scroll-distance="10"
          :infinite-scroll-immediate="false"
          class="infinite-list pool_list"
          style="overflow: auto"
        >
          <template v-if="poolList.length">
            <li v-for="(item, idx) in poolList" :key="idx">
              <div
                class="pool_item"
                :class="{
                  success: item.status == 2,
                  not_start: item.status == 0,
                  progress: item.status == 1,
                }"
              >
                <span>{{ $t(`step${item.stage}`) }}</span>
                <span>{{ item.income }} USDT</span>
                <span>
                  {{
                    item.status == 0
                      ? $t('nobegin')
                      : item.status == 1
                      ? $t('begning')
                      : $t('finish')
                  }}
                </span>
              </div>
            </li>
          </template>
          <div class="empty" v-else>{{ $t('norecord') }}</div>
        </ul>
      </div>
    </div>
    <!-- 钱包 -->
    <div class="wallet_box">
      <div class="header">
        <span>{{ $t('wallet') }}</span>
        <div class="line"></div>
      </div>
      <div class="wallet_list">
        <div class="wallet_item">
          <span class="left">{{ $t('utsdyue') }}</span>
          <span class="right">{{ walletData.usdtAmount || 0 }} USDT</span>
        </div>
        <div class="wallet_item">
          <span class="left">{{ $t('mroyue') }}</span>
          <span class="right">{{ walletData.mioAmount || 0 }} MRO</span>
        </div>
      </div>

      <div class="operate">
        <div class="recharge operate_item" @click="toRecharge()">{{ $t('recharge') }}</div>
        <div class="exchange operate_item" @click="toExchange()">{{ $t('send') }}</div>
        <div class="ransom operate_item" @click="toRansom()">{{ $t('get_coin') }}</div>
      </div>
      <!--   <div class="point">
      <p>温馨提示</p>
      <span> 钱包USDT余额需要≥100USDT才可以预约竞拍超级玛丽 </span>
    </div>-->
    </div>
    <div class="model" v-if="isShow2">
      <div class="wrap_box">
        <div class="close" @click="closeModel">X</div>
        <el-input
          v-if="btnStatus !== 'exchange'"
          v-model="amount"
          type="number"
          :placeholder="$t('pleasemoney')"
          @input="handleInput"
        />
        <div class="button_box" v-if="btnStatus !== 'ransom'">
          <div class="btn" @click="clickMio('mio')">
            {{ btnStatus === 'recharge' ? $t('recharge') : $t('send') }}MRO
          </div>
          <div class="btn" @click="clickUsdt('usdt')">
            {{ btnStatus === 'recharge' ? $t('recharge') : $t('send') }}USDT
          </div>
        </div>

        <div class="button_box" v-if="btnStatus === 'ransom'">
          <div class="btn" @click="clickAmount">{{ $t('getget') }}</div>
          <div class="btn" @click="clickAllAmount">{{ $t('finiallgetsh') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import useClipboard from 'vue-clipboard3';
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      loginStatus: null,
      step: 0,
      currentUrlList: [
        require('../assets/super-mario-1.png'),
        require('../assets/super-mario-1.png'),
        require('../assets/super-mario-3.png'),
        require('../assets/super-mario-4.png'),
        require('../assets/super-mario-5.png'),
      ],
      configData: {},
      token: sessionStorage.getItem('token'),
      isShow: false,
      isShow2: false,
      hr: '',
      min: '',
      sec: '',
      countDown: 0,
      hadTime: 0,
      timer: null,

      collectData: {},
      showTeamList: false,
      teamInfoList: [],
      poolList: [],
      walletData: {},
      lang: 'zh',
      isLower: false,
      pageRecharge: 1,
      amount: 0,
      amount2: 0,
      btnStatus: '',
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async clickUsdt(type) {
      const amount = Number(this.amount.replace(/^0|\D/g, ''));
      console.log(type, amount);

      this.isShow2 = false;
    },
    async clickMio(type) {
      const amount = Number(this.amount.replace(/^0|\D/g, ''));
      console.log(amount * 100000000000000000 + '');
      console.log(type);

      this.isShow2 = false;
    },
    closeModel() {
      this.isShow2 = false;
    },
    clickAmount() {
      this.getUserInfo();
      console.log('clickAmount');
      this.isShow2 = false;
    },
    clickAllAmount() {
      this.amount2 = this.walletData.usdtAmount;
      console.log('点击');
      this.isShow2 = false;
    },

    toRecharge() {
      if (!this.token) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('please_connect'),
          type: 'error',
        });
        return;
      }
      this.btnStatus = 'recharge';
      this.isShow2 = true;
    },
    toExchange() {
      if (!this.token) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('please_connect'),
          type: 'error',
        });
        return;
      }
      this.btnStatus = 'exchange';
      this.isShow2 = true;
    },

    toRansom() {
      if (!this.token) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('please_connect'),
          type: 'error',
        });
        return;
      }
      this.isShow2 = true;
      this.btnStatus = 'ransom';
    },
    getParams() {
      let url = location.href.split('?')[1]?.split('&'); //获取url中"?"符后的字串

      let query = {};
      if (url?.length) {
        url.forEach((item) => {
          query[item.split('=')[0]] = decodeURIComponent(item.split('=')[1]); //转码
        });
      }
      return query;
    },
    async connectWallet() {
      if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          return {
            address: addressArray[0],
            status: true,
          };
        } catch (err) {
          return {
            address: '',
            status: err.message,
          };
        }
      } else {
        return {
          address: '',
          status: '没有安装钱包',
        };
      }
    },
    async toWallet() {
      const params = this.getParams();
      const { address } = await this.connectWallet();
      if (address) {
        this.loginStatus = address;
        sessionStorage.setItem('token', address);

        let token = address;
        this.token = token;
        if (token) {
          let a = [...token.split('').splice(0, 5)];
          let b = token.split('').splice(token.split('').length - 4);
          let str = '';
          for (const item of a) {
            str += item;
          }
          str = str + '...';
          for (const item of b) {
            str += item;
          }
          this.loginStatus = str;
        }
        let data = {};
        if (params.super_address) {
          data.super_address = params.super_address;
        }

        await axios.post('http://dapp.marioinfinity.com/api/user/register', {
          address,
          super_address: params.super_address,
        });
      }
    },
    changeCover(step) {
      this.step = step;
    },
    toReserve() {
      if (!this.token) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('please_connect'),
          type: 'error',
        });
      } else {
        this.isShow = true;
      }
    },
    changeLang(lang) {
      this.lang = lang;
      window.i18n.locale = lang;
    },
    countdown() {
      clearInterval(this.timer);
      if (!this.configData[this.step].count_down) return null;
      let time = this.configData[this.step].count_down.split(':');
      time = time[0] * 3600 + time[1] * 60 + time[2] * 1;

      this.countDown = time - this.hadTime;
      let msec = this.countDown;

      let hr = parseInt((msec / 60 / 60) % 24);
      let min = parseInt((msec / 60) % 60);
      let sec = parseInt(msec % 60);
      console.log(msec, hr, min, sec);
      this.hr = hr > 9 ? hr : '0' + hr;
      this.min = min > 9 ? min : '0' + min;
      this.sec = sec > 9 ? sec : '0' + sec;
      this.timer = setInterval(() => {
        this.hadTime = this.hadTime + 1;
        msec = msec - 1;
        let hr = parseInt((msec / 60 / 60) % 24);
        let min = parseInt((msec / 60) % 60);
        let sec = parseInt(msec % 60);
        this.hr = hr > 9 ? hr : '0' + hr;
        this.min = min > 9 ? min : '0' + min;
        this.sec = sec > 9 ? sec : '0' + sec;
      }, 1000);
    },
    async handleCopy() {
      if (!this.token) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('please_connect'),
          type: 'success',
        });
        return;
      }
      const { toClipboard } = useClipboard();
      const address = sessionStorage.getItem('token');
      let copyContent;
      if (this.token) {
        copyContent = `http://dapp.marioinfinity.com?super_address=${address}`;
      } else {
        copyContent = 'http://dapp.marioinfinity.com';
      }
      try {
        await toClipboard(copyContent);
        this.$message({
          showClose: false,
          message: this.$i18n.t('copy_success'),
          type: 'success',
        });
      } catch (e) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('copy_error'),
          type: 'error',
        });
      }
    },
    handleShowTeamList() {
      if (!this.token) {
        this.$message({
          showClose: false,
          message: this.$i18n.t('please_connect'),
          type: 'error',
        });
        return;
      }
      this.showTeamList = true;

      this.handleLoad();
    },
    closeTeamList() {
      this.showTeamList = false;
    },
    interceptStr(str) {
      const prev = str.slice(0, 5);
      const next = str.slice(-4);
      return prev + '...' + next;
    },
    async handleLoad() {
      // if (type === 'prev') {
      //   this.page < 0 ? (this.page = 0) : this.page--;
      // } else if (type === 'next') {
      //   this.page++;
      // } else {
      //   this.page = 1;
      // }

      const res = await axios.post('http://dapp.marioinfinity.com/api/index/getLowerList', {
        address: this.token,
      });
      res.data.data.list.forEach((element) => {
        element.intercept = this.interceptStr(element.wallet_address);
      });
      this.teamInfoList = res.data.data.list;
    },
    async getList() {
      const res = await axios.post(
        'http://dapp.marioinfinity.com/api/index/getParticipateMarioList',
        {
          address: this.token,
          page_size: 4 * this.pageRecharge,
        }
      );
      this.poolList = res.data.data.list;
    },
    async handleLowerLoad() {
      const address = sessionStorage.getItem('token');
      if (!this.isLower && address) {
        this.isLower = true;
        const res = await axios.post(
          'http://dapp.marioinfinity.com/api/index/getParticipateMarioList',
          {
            address: this.token,
            page_size: 4 * this.pageRecharge,
          }
        );
        this.poolList = res.data.data.list;
        if (this.poolList.length == 4 * this.pageRecharge) {
          this.isLower = false;
        } else {
          this.isLower = true;
        }

        this.pageRecharge = this.pageRecharge + 1;
      }
    },
    clickCancel() {
      this.isShow = false;
    },
    async clickOk() {
      this.isShow = false;

      const res = await axios.post('http://dapp.marioinfinity.com/api/index/participatemario', {
        address: this.token,
        stage: this.configData[this.step].stage,
        jump: false,
        amount: Number(this.amount),
      });
      if (res.data.code == 200) {
        this.getUserInfo();
        this.getList();
      }

      this.$message({
        showClose: false,
        message: this.$i18n.t(res.data.msg),
        type: res.data.code == '200' ? 'success' : 'error',
      });
    },
    handleInput(e) {
      this.amount = e.replace(/^0|\D/g, '');
    },
    handleInput2(e) {
      this.amount2 = e.replace(/^0|\D/g, '');
    },
    async getUserInfo() {
      const res2 = await axios.post('http://dapp.marioinfinity.com/api/index/getUserInfo', {
        address: this.token,
      });

      this.collectData = res2.data.data;
      this.walletData = res2.data.data;
    },
  },
  watch: {
    configData() {
      this.countdown();
    },
    step() {
      this.countdown();
    },
    token() {
      location.reload();
    },
  },
  async mounted() {
    const res1 = await axios.get('http://dapp.marioinfinity.com/api/index/getMarioConfig', {
      page_size: 1,
    });
    this.configData = res1.data.data;
    this.countdown();

    this.getUserInfo();

    const token = sessionStorage.getItem('token');
    if (token) {
      let a = [...token.split('').splice(0, 5)];
      let b = token.split('').splice(token.split('').length - 4);
      let str = '';
      for (const item of a) {
        str += item;
      }
      str = str + '...';
      for (const item of b) {
        str += item;
      }
      this.loginStatus = str;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home_box {
  background-color: #1f293e;
  font-family: PingFang SC;
  padding-bottom: 94px;
  box-sizing: border-box;
  .header_box {
    .logo {
      width: 232px;
      height: 40px;
      margin-left: 40px;
      margin-top: 22px;
      margin: 22px 0 46px 22px;
    }
    .el-dropdown {
      display: flex;
    }
    .el-dropdown-link {
      width: max-content;
      height: max-content;
      border: 1px solid #fff;
      padding: 12px 20px;
      border-radius: 40px;
      color: #fff;
      margin-right: 40px;
      font-size: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .to_wallet {
      width: max-content;
      height: max-content;
      border: 1px solid #fff;
      padding: 12px 20px;
      border-radius: 40px;
      color: #fff;
      margin-right: 40px;
      font-size: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .step_box {
    background: url('../assets/header.png') center no-repeat;
    background-size: 320px 110px;
    width: 320px;
    height: 110px;
    font-size: 48px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 auto;
  }
  .cover_box {
    margin-top: 64px;

    .el-carousel {
      height: 360px;
    }

    .el-carousel .el-carousel__arrow {
      transform: scale(2);
    }

    .el-carousel__item {
      display: flex;
      justify-content: center;
      width: 100%;
      height: max-content;
    }

    .el-carousel__item img {
      width: 130px;
      height: 280px;
    }

    .carousel__arrow {
      transform: scale(2);
    }

    .el-carousel__button {
      width: 35px;
      height: 2px;
      border-radius: 50%;
    }
  }
  .bid_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;
    padding: 0 32px;
    margin-top: 40px;
    margin-bottom: 50px;

    .start_bid {
      width: 100%;
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 44px;
    }

    .bid_list {
      width: 100%;
    }

    .bid_item {
      display: flex;
      justify-content: space-between;

      width: 100%;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 22px;
    }

    .reserve {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 700px;
      height: 80px;
      background: #ffffff;
      border-radius: 16px;
      font-size: 36px;
      font-weight: 500;
      color: #000000;
      margin-top: 32px;
      margin-bottom: 30px;
    }

    .remark {
      font-size: 24px;
      font-weight: 500;
    }

    .model {
      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 12;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.5);
    }

    .wrap_box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      width: 60%;
      background-color: #fff;
      border-radius: 20px;
      padding: 30px 40px 20px;
    }

    .close {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: #f6f6f6;
      border-radius: 50%;
      font-size: 24px;

      color: #808080;
    }

    .button_box {
      display: flex;
      justify-content: space-between;
    }

    .btn {
      width: 180px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      border: 1px solid #bbb;
      border-radius: 8px;
      color: #bbb;
      font-size: 30px;
    }

    .btn:first-child {
      margin-right: 20px;
    }

    .el-input__inner {
      height: 70px;
      margin-bottom: 40px;
      font-size: 34px;
    }
  }
  .collect_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #1a1a1a;
    padding: 40px 26px 40px;
    margin: 0 30px;
    background-color: #fff;
    border-radius: 14px;

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 36px;
      font-weight: 500;
      line-height: 48px;
    }

    .header .line {
      width: 84px;
      height: 12px;
      background-color: #1a1a1a;
      margin-top: 12px;
      margin-bottom: 40px;
    }

    .collect_list {
      width: 100%;
    }

    .collect_list .collect_item {
      display: flex;
      justify-content: space-between;

      width: 100%;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 22px;
    }

    .collect_item .click {
      font-size: 24px;
      color: #d70000;
      display: inline-block;
      margin-left: 20px;
    }

    .show_list {
      display: flex;
      justify-content: center;

      margin-top: 40px;
    }

    .show_list .btn {
      width: 280px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      border: 1px solid #bbb;
      border-radius: 8px;
      color: #bbb;
      font-size: 30px;
    }

    .model {
      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 12;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.5);
    }

    .team_list {
      position: relative;

      width: 600px;
      height: 830px;
      background-color: #f6f6f6;
      border-radius: 10px;
      padding: 20px 0 0;
    }

    .team_item {
      display: flex;
      justify-content: space-between;

      padding: 15px 20px;
      margin-bottom: 10px;
      box-sizing: border-box;
      background-color: #eee;
      border-radius: 20px;
      font-size: 18px;
    }

    .title {
      background-color: #f6f6f6;
      padding-left: 40px;
      padding-right: 40px;
    }

    .infinite-list {
      padding: 0 30px;
      height: 720px;
    }

    .empty {
      font-size: 36px;
      font-weight: 700;
      height: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
    }

    .left_arrow,
    .right_arrow {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .left_arrow {
      position: absolute;
      top: 50%;
      left: 20px;
    }

    .right_arrow {
      position: absolute;
      top: 50%;
      right: 20px;
    }

    .close {
      font-size: 12px;
      position: absolute;
      top: -8px;
      right: -8px;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
  .pool_box {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 600px;
    color: #1a1a1a;
    padding: 40px 26px 60px;
    margin: 0 30px;
    background-color: #fff;
    border-radius: 14px;
    padding: 20px 0;
    margin-top: 60px;
    margin-bottom: 60px;

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 36px;
      font-weight: 500;
      line-height: 48px;
    }

    .header .line {
      width: 84px;
      height: 12px;
      background-color: #1a1a1a;
      margin-top: 12px;
      margin-bottom: 40px;
    }

    img {
      width: 172px;
      height: 332px;
    }

    .pool_list {
      height: 440px;
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
    }

    .pool_item {
      display: flex;
      justify-content: space-between;

      margin: 20px 0;
      padding: 20px 20px;
      box-sizing: border-box;
      background-color: #f6f6f6;
      border-radius: 20px;
      font-size: 18px;
    }

    .pool_list .title {
      background-color: transparent;
      font-size: 32px;
      font-weight: 700;
    }

    .infinite-list {
      color: #fff;
    }

    .pool_item span {
      display: flex;
      justify-content: center;
    }

    .empty {
      font-size: 44px;
      font-weight: 700;
      height: 440px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
    }

    .success {
      background-color: #67c23a;
    }

    .not_start {
      background-color: #f56c6c;
    }

    .progress {
      background-color: #e6a23c;
    }
  }
  .wallet_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #1f293e;
    padding: 40px 26px 66px;
    margin: 0 30px;
    background-color: #fff;
    border-radius: 14px;

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 36px;
      font-weight: 500;
      line-height: 48px;
    }

    .header .line {
      width: 84px;
      height: 12px;
      background-color: #1a1a1a;
      margin-top: 12px;
      margin-bottom: 40px;
    }

    .wallet_list {
      width: 100%;
      border-bottom: 1px solid #808080;
      margin-bottom: 28px;
    }

    .wallet_list .wallet_item {
      display: flex;
      justify-content: space-between;

      width: 100%;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 22px;
    }

    .wallet_item .click {
      font-size: 24px;
      color: #d70000;
      display: inline-block;
      margin-left: 20px;
    }

    .operate {
      display: flex;
      justify-content: space-between;
      font-size: 30px;

      width: 100%;
    }

    .operate .operate_item {
      width: 180px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      border: 1px solid #1a1a1a;
      border-radius: 8px;
    }

    .point {
      font-size: 24px;
    }

    .point p {
      margin: 22px 0 18px;
    }
  }
}
.model {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 12;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
}

.model .wrap_box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 60%;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 40px 20px;
}

.wrap_box .close {
  width: 16px;
  height: 16px;
  position: absolute;
  top: -8px;
  right: -8px;

  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #f6f6f6;
  border-radius: 50%;
  font-size: 24px;

  color: #808080;
}

.wrap_box .button_box {
  display: flex;
  justify-content: space-between;
}

.button_box .btn {
  width: 300px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  border: 1px solid #bbb;
  border-radius: 8px;
  color: #bbb;
  font-size: 30px;
}

.button_box .btn:first-child {
  margin-right: 20px;
}

.wrap_box .el-input__inner {
  height: 70px;
  margin-bottom: 40px;
  font-size: 34px;
}
.flex {
  display: flex;
}
.flex-y {
  display: flex;
  flex-direction: column;
}
.f-x-c {
  justify-content: center;
}
.f-y-c {
  align-items: center;
}
.f-sb {
  justify-content: space-between;
}
.el-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}
.el-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-textarea__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.el-textarea__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.el-textarea__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.el-textarea__inner::placeholder {
  color: #c0c4cc;
}
.el-textarea__inner:hover {
  border-color: #c0c4cc;
}
.el-textarea__inner:focus {
  outline: 0;
  border-color: #409eff;
}
.el-textarea .el-input__count {
  color: #909399;
  background: #fff;
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  right: 10px;
}
.el-textarea.is-disabled .el-textarea__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.el-textarea.is-disabled .el-textarea__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.el-textarea.is-disabled .el-textarea__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.el-textarea.is-disabled .el-textarea__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.el-textarea.is-disabled .el-textarea__inner::placeholder {
  color: #c0c4cc;
}
.el-textarea.is-exceed .el-textarea__inner {
  border-color: #f56c6c;
}
.el-textarea.is-exceed .el-input__count {
  color: #f56c6c;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.el-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px;
}
.el-input::-webkit-scrollbar:horizontal {
  height: 6px;
}
.el-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc;
}
.el-input::-webkit-scrollbar-corner {
  background: #fff;
}
.el-input::-webkit-scrollbar-track {
  background: #fff;
}
.el-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px;
}
.el-input .el-input__clear {
  color: #c0c4cc;
  font-size: 14px;
  cursor: pointer;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-input .el-input__clear:hover {
  color: #909399;
}
.el-input .el-input__count {
  height: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #909399;
  font-size: 12px;
}
.el-input .el-input__count .el-input__count-inner {
  background: #fff;
  line-height: initial;
  display: inline-block;
  padding: 0 5px;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-input__prefix,
.el-input__suffix {
  position: absolute;
  top: 0;
  -webkit-transition: all 0.3s;
  text-align: center;
  height: 100%;
  color: #c0c4cc;
}
.el-input__inner::-ms-reveal {
  display: none;
}
.el-input__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.el-input__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.el-input__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.el-input__inner::placeholder {
  color: #c0c4cc;
}
.el-input__inner:hover {
  border-color: #c0c4cc;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #409eff;
  outline: 0;
}
.el-input__suffix {
  right: 5px;
  transition: all 0.3s;
  pointer-events: none;
}
.el-input__suffix-inner {
  pointer-events: all;
}
.el-input__prefix {
  left: 5px;
  transition: all 0.3s;
}
.el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 40px;
}
.el-input__icon:after {
  content: '';
  height: 100%;
  width: 0;
  display: inline-block;
  vertical-align: middle;
}
.el-input__validateIcon {
  pointer-events: none;
}
.el-input.is-disabled .el-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.el-input.is-disabled .el-input__inner::-webkit-input-placeholder {
  color: #c0c4cc;
}
.el-input.is-disabled .el-input__inner:-ms-input-placeholder {
  color: #c0c4cc;
}
.el-input.is-disabled .el-input__inner::-ms-input-placeholder {
  color: #c0c4cc;
}
.el-input.is-disabled .el-input__inner::placeholder {
  color: #c0c4cc;
}
.el-input.is-disabled .el-input__icon {
  cursor: not-allowed;
}
.el-input.is-exceed .el-input__inner {
  border-color: #f56c6c;
}
.el-input.is-exceed .el-input__suffix .el-input__count {
  color: #f56c6c;
}
.el-input--suffix .el-input__inner {
  padding-right: 30px;
}
.el-input--prefix .el-input__inner {
  padding-left: 30px;
}
.el-input--medium {
  font-size: 14px;
}
.el-input--medium .el-input__inner {
  height: 36px;
  line-height: 36px;
}
.el-input--medium .el-input__icon {
  line-height: 36px;
}
.el-input--small {
  font-size: 13px;
}
.el-input--small .el-input__inner {
  height: 32px;
  line-height: 32px;
}
.el-input--small .el-input__icon {
  line-height: 32px;
}
.el-input--mini {
  font-size: 12px;
}
.el-input--mini .el-input__inner {
  height: 28px;
  line-height: 28px;
}
.el-input--mini .el-input__icon {
  line-height: 28px;
}
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.el-input-group > .el-input__inner {
  vertical-align: middle;
  display: table-cell;
}
.el-input-group__append,
.el-input-group__prepend {
  background-color: #f5f7fa;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap;
}
.el-input-group--prepend .el-input__inner,
.el-input-group__append {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.el-input-group--append .el-input__inner,
.el-input-group__prepend {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.el-input-group__append:focus,
.el-input-group__prepend:focus {
  outline: 0;
}
.el-input-group__append .el-button,
.el-input-group__append .el-select,
.el-input-group__prepend .el-button,
.el-input-group__prepend .el-select {
  display: inline-block;
  margin: -10px -20px;
}
.el-input-group__append button.el-button,
.el-input-group__append div.el-select .el-input__inner,
.el-input-group__append div.el-select:hover .el-input__inner,
.el-input-group__prepend button.el-button,
.el-input-group__prepend div.el-select .el-input__inner,
.el-input-group__prepend div.el-select:hover .el-input__inner {
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  border-top: 0;
  border-bottom: 0;
}
.el-input-group__append .el-button,
.el-input-group__append .el-input,
.el-input-group__prepend .el-button,
.el-input-group__prepend .el-input {
  font-size: inherit;
}
.el-input-group__prepend {
  border-right: 0;
}
.el-input-group__append {
  border-left: 0;
}
.el-input-group--append .el-select .el-input.is-focus .el-input__inner,
.el-input-group--prepend .el-select .el-input.is-focus .el-input__inner {
  border-color: transparent;
}
.el-input__inner::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
.el-message__closeBtn:focus,
.el-message__content:focus {
  outline-width: 0;
}
.el-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.el-message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.el-message.is-closable .el-message__content {
  padding-right: 16px;
}
.el-message p {
  margin: 0;
}
.el-message--info .el-message__content {
  color: #909399;
}
.el-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.el-message--success .el-message__content {
  color: #67c23a;
}
.el-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.el-message--warning .el-message__content {
  color: #e6a23c;
}
.el-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.el-message--error .el-message__content {
  color: #f56c6c;
}
.el-message__icon {
  margin-right: 10px;
}
.el-message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1;
}
.el-message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px;
}
.el-message__closeBtn:hover {
  color: #909399;
}
.el-message .el-icon-success {
  color: #67c23a;
}
.el-message .el-icon-error {
  color: #f56c6c;
}
.el-message .el-icon-info {
  color: #909399;
}
.el-message .el-icon-warning {
  color: #e6a23c;
}
.el-message-fade-enter,
.el-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
.el-dropdown-menu {
  background: #fff;
}
.el-dropdown-menu__item {
  border: 1px solid #fff;
  padding: 12px 20px;
  border-radius: 40px;
  color: #000;
  margin-right: 40px;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.el-popper .popper__arrow {
  border-width: 6px;
  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}
.el-popper .popper__arrow::after {
  content: ' ';
  border-width: 6px;
}
.el-popper[x-placement^='top'] {
  margin-bottom: 12px;
}
.el-popper[x-placement^='top'] .popper__arrow {
  bottom: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-color: #ebeef5;
  border-bottom-width: 0;
}
.el-popper[x-placement^='top'] .popper__arrow::after {
  bottom: 1px;
  margin-left: -6px;
  border-top-color: #fff;
  border-bottom-width: 0;
}
.el-popper[x-placement^='bottom'] {
  margin-top: 12px;
}
.el-popper[x-placement^='bottom'] .popper__arrow {
  top: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-width: 0;
  border-bottom-color: #ebeef5;
}
.el-popper[x-placement^='bottom'] .popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.el-popper[x-placement^='right'] {
  margin-left: 12px;
}
.el-popper[x-placement^='right'] .popper__arrow {
  top: 50%;
  left: -6px;
  margin-bottom: 3px;
  border-right-color: #ebeef5;
  border-left-width: 0;
}
.el-popper[x-placement^='right'] .popper__arrow::after {
  bottom: -6px;
  left: 1px;
  border-right-color: #fff;
  border-left-width: 0;
}
.el-popper[x-placement^='left'] {
  margin-right: 12px;
}
.el-popper[x-placement^='left'] .popper__arrow {
  top: 50%;
  right: -6px;
  margin-bottom: 3px;
  border-right-width: 0;
  border-left-color: #ebeef5;
}
.el-popper[x-placement^='left'] .popper__arrow::after {
  right: 1px;
  bottom: -6px;
  margin-left: -6px;
  border-right-width: 0;
  border-left-color: #fff;
}
.el-popover {
  position: absolute;
  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  word-break: break-all;
}
.el-popover--plain {
  padding: 18px 20px;
}
.el-popover__title {
  color: #303133;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 12px;
}
.el-popover:focus,
.el-popover:focus:active,
.el-popover__reference:focus:hover,
.el-popover__reference:focus:not(.focusing) {
  outline-width: 0;
}
.el-carousel {
  position: relative;
}
.el-carousel--horizontal {
  overflow-x: hidden;
}
.el-carousel--vertical {
  overflow-y: hidden;
}
.el-carousel__container {
  position: relative;
  height: 300px;
}
.el-carousel__arrow {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50%;
  background-color: rgba(31, 45, 61, 0.11);
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  font-size: 12px;
}
.el-carousel__arrow--left {
  left: 16px;
}
.el-carousel__arrow--right {
  right: 16px;
}
.el-carousel__arrow:hover {
  background-color: rgba(31, 45, 61, 0.23);
}
.el-carousel__arrow i {
  cursor: pointer;
}
.el-carousel__indicators {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.el-carousel__indicators--horizontal {
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.el-carousel__indicators--vertical {
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.el-carousel__indicators--outside {
  bottom: 26px;
  text-align: center;
  position: static;
  -webkit-transform: none;
  transform: none;
}
.el-carousel__indicators--outside .el-carousel__indicator:hover button {
  opacity: 0.64;
}
.el-carousel__indicators--outside button {
  background-color: #c0c4cc;
  opacity: 0.24;
}
.el-carousel__indicators--labels {
  left: 0;
  right: 0;
  -webkit-transform: none;
  transform: none;
  text-align: center;
}
.el-carousel__indicators--labels .el-carousel__button {
  height: auto;
  width: auto;
  padding: 2px 18px;
  font-size: 12px;
}
.el-carousel__indicators--labels .el-carousel__indicator {
  padding: 6px 4px;
}
.el-carousel__indicator {
  background-color: transparent;
  cursor: pointer;
}
.el-carousel__indicator:hover button {
  opacity: 0.72;
}
.el-carousel__indicator--horizontal {
  display: inline-block;
  padding: 12px 4px;
}
.el-carousel__indicator--vertical {
  padding: 4px 12px;
}
.el-carousel__indicator--vertical .el-carousel__button {
  width: 2px;
  height: 15px;
}
.el-carousel__indicator.is-active button {
  opacity: 1;
}
.el-carousel__button {
  display: block;
  opacity: 0.48;
  width: 30px;
  height: 2px;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.carousel-arrow-left-enter,
.carousel-arrow-left-leave-active {
  -webkit-transform: translateY(-50%) translateX(-10px);
  transform: translateY(-50%) translateX(-10px);
  opacity: 0;
}
.carousel-arrow-right-enter,
.carousel-arrow-right-leave-active {
  -webkit-transform: translateY(-50%) translateX(10px);
  transform: translateY(-50%) translateX(10px);
  opacity: 0;
}
.el-carousel__item,
.el-carousel__mask {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
}
.el-carousel__item {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}
.el-carousel__item.is-active {
  z-index: 2;
}
.el-carousel__item.is-animating {
  -webkit-transition: -webkit-transform 0.4s ease-in-out;
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
}
.el-carousel__item--card {
  width: 50%;
  -webkit-transition: -webkit-transform 0.4s ease-in-out;
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
}
.el-carousel__item--card.is-in-stage {
  cursor: pointer;
  z-index: 1;
}
.el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask,
.el-carousel__item--card.is-in-stage:hover .el-carousel__mask {
  opacity: 0.12;
}
.el-carousel__item--card.is-active {
  z-index: 2;
}
.el-carousel__mask {
  width: 100%;
  background-color: #fff;
  opacity: 0.24;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
@font-face {
  font-family: element-icons;
  src: url(../fonts/element-icons.woff) format('woff'),
    url(../fonts/element-icons.ttf) format('truetype');
  font-weight: 400;
  font-display: 'auto';
  font-style: normal;
}
[class*=' el-icon-'],
[class^='el-icon-'] {
  font-family: element-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-icon-ice-cream-round:before {
  content: '\e6a0';
}
.el-icon-ice-cream-square:before {
  content: '\e6a3';
}
.el-icon-lollipop:before {
  content: '\e6a4';
}
.el-icon-potato-strips:before {
  content: '\e6a5';
}
.el-icon-milk-tea:before {
  content: '\e6a6';
}
.el-icon-ice-drink:before {
  content: '\e6a7';
}
.el-icon-ice-tea:before {
  content: '\e6a9';
}
.el-icon-coffee:before {
  content: '\e6aa';
}
.el-icon-orange:before {
  content: '\e6ab';
}
.el-icon-pear:before {
  content: '\e6ac';
}
.el-icon-apple:before {
  content: '\e6ad';
}
.el-icon-cherry:before {
  content: '\e6ae';
}
.el-icon-watermelon:before {
  content: '\e6af';
}
.el-icon-grape:before {
  content: '\e6b0';
}
.el-icon-refrigerator:before {
  content: '\e6b1';
}
.el-icon-goblet-square-full:before {
  content: '\e6b2';
}
.el-icon-goblet-square:before {
  content: '\e6b3';
}
.el-icon-goblet-full:before {
  content: '\e6b4';
}
.el-icon-goblet:before {
  content: '\e6b5';
}
.el-icon-cold-drink:before {
  content: '\e6b6';
}
.el-icon-coffee-cup:before {
  content: '\e6b8';
}
.el-icon-water-cup:before {
  content: '\e6b9';
}
.el-icon-hot-water:before {
  content: '\e6ba';
}
.el-icon-ice-cream:before {
  content: '\e6bb';
}
.el-icon-dessert:before {
  content: '\e6bc';
}
.el-icon-sugar:before {
  content: '\e6bd';
}
.el-icon-tableware:before {
  content: '\e6be';
}
.el-icon-burger:before {
  content: '\e6bf';
}
.el-icon-knife-fork:before {
  content: '\e6c1';
}
.el-icon-fork-spoon:before {
  content: '\e6c2';
}
.el-icon-chicken:before {
  content: '\e6c3';
}
.el-icon-food:before {
  content: '\e6c4';
}
.el-icon-dish-1:before {
  content: '\e6c5';
}
.el-icon-dish:before {
  content: '\e6c6';
}
.el-icon-moon-night:before {
  content: '\e6ee';
}
.el-icon-moon:before {
  content: '\e6f0';
}
.el-icon-cloudy-and-sunny:before {
  content: '\e6f1';
}
.el-icon-partly-cloudy:before {
  content: '\e6f2';
}
.el-icon-cloudy:before {
  content: '\e6f3';
}
.el-icon-sunny:before {
  content: '\e6f6';
}
.el-icon-sunset:before {
  content: '\e6f7';
}
.el-icon-sunrise-1:before {
  content: '\e6f8';
}
.el-icon-sunrise:before {
  content: '\e6f9';
}
.el-icon-heavy-rain:before {
  content: '\e6fa';
}
.el-icon-lightning:before {
  content: '\e6fb';
}
.el-icon-light-rain:before {
  content: '\e6fc';
}
.el-icon-wind-power:before {
  content: '\e6fd';
}
.el-icon-baseball:before {
  content: '\e712';
}
.el-icon-soccer:before {
  content: '\e713';
}
.el-icon-football:before {
  content: '\e715';
}
.el-icon-basketball:before {
  content: '\e716';
}
.el-icon-ship:before {
  content: '\e73f';
}
.el-icon-truck:before {
  content: '\e740';
}
.el-icon-bicycle:before {
  content: '\e741';
}
.el-icon-mobile-phone:before {
  content: '\e6d3';
}
.el-icon-service:before {
  content: '\e6d4';
}
.el-icon-key:before {
  content: '\e6e2';
}
.el-icon-unlock:before {
  content: '\e6e4';
}
.el-icon-lock:before {
  content: '\e6e5';
}
.el-icon-watch:before {
  content: '\e6fe';
}
.el-icon-watch-1:before {
  content: '\e6ff';
}
.el-icon-timer:before {
  content: '\e702';
}
.el-icon-alarm-clock:before {
  content: '\e703';
}
.el-icon-map-location:before {
  content: '\e704';
}
.el-icon-delete-location:before {
  content: '\e705';
}
.el-icon-add-location:before {
  content: '\e706';
}
.el-icon-location-information:before {
  content: '\e707';
}
.el-icon-location-outline:before {
  content: '\e708';
}
.el-icon-location:before {
  content: '\e79e';
}
.el-icon-place:before {
  content: '\e709';
}
.el-icon-discover:before {
  content: '\e70a';
}
.el-icon-first-aid-kit:before {
  content: '\e70b';
}
.el-icon-trophy-1:before {
  content: '\e70c';
}
.el-icon-trophy:before {
  content: '\e70d';
}
.el-icon-medal:before {
  content: '\e70e';
}
.el-icon-medal-1:before {
  content: '\e70f';
}
.el-icon-stopwatch:before {
  content: '\e710';
}
.el-icon-mic:before {
  content: '\e711';
}
.el-icon-copy-document:before {
  content: '\e718';
}
.el-icon-full-screen:before {
  content: '\e719';
}
.el-icon-switch-button:before {
  content: '\e71b';
}
.el-icon-aim:before {
  content: '\e71c';
}
.el-icon-crop:before {
  content: '\e71d';
}
.el-icon-odometer:before {
  content: '\e71e';
}
.el-icon-time:before {
  content: '\e71f';
}
.el-icon-bangzhu:before {
  content: '\e724';
}
.el-icon-close-notification:before {
  content: '\e726';
}
.el-icon-microphone:before {
  content: '\e727';
}
.el-icon-turn-off-microphone:before {
  content: '\e728';
}
.el-icon-position:before {
  content: '\e729';
}
.el-icon-postcard:before {
  content: '\e72a';
}
.el-icon-message:before {
  content: '\e72b';
}
.el-icon-chat-line-square:before {
  content: '\e72d';
}
.el-icon-chat-dot-square:before {
  content: '\e72e';
}
.el-icon-chat-dot-round:before {
  content: '\e72f';
}
.el-icon-chat-square:before {
  content: '\e730';
}
.el-icon-chat-line-round:before {
  content: '\e731';
}
.el-icon-chat-round:before {
  content: '\e732';
}
.el-icon-set-up:before {
  content: '\e733';
}
.el-icon-turn-off:before {
  content: '\e734';
}
.el-icon-open:before {
  content: '\e735';
}
.el-icon-connection:before {
  content: '\e736';
}
.el-icon-link:before {
  content: '\e737';
}
.el-icon-cpu:before {
  content: '\e738';
}
.el-icon-thumb:before {
  content: '\e739';
}
.el-icon-female:before {
  content: '\e73a';
}
.el-icon-male:before {
  content: '\e73b';
}
.el-icon-guide:before {
  content: '\e73c';
}
.el-icon-news:before {
  content: '\e73e';
}
.el-icon-price-tag:before {
  content: '\e744';
}
.el-icon-discount:before {
  content: '\e745';
}
.el-icon-wallet:before {
  content: '\e747';
}
.el-icon-coin:before {
  content: '\e748';
}
.el-icon-money:before {
  content: '\e749';
}
.el-icon-bank-card:before {
  content: '\e74a';
}
.el-icon-box:before {
  content: '\e74b';
}
.el-icon-present:before {
  content: '\e74c';
}
.el-icon-sell:before {
  content: '\e6d5';
}
.el-icon-sold-out:before {
  content: '\e6d6';
}
.el-icon-shopping-bag-2:before {
  content: '\e74d';
}
.el-icon-shopping-bag-1:before {
  content: '\e74e';
}
.el-icon-shopping-cart-2:before {
  content: '\e74f';
}
.el-icon-shopping-cart-1:before {
  content: '\e750';
}
.el-icon-shopping-cart-full:before {
  content: '\e751';
}
.el-icon-smoking:before {
  content: '\e752';
}
.el-icon-no-smoking:before {
  content: '\e753';
}
.el-icon-house:before {
  content: '\e754';
}
.el-icon-table-lamp:before {
  content: '\e755';
}
.el-icon-school:before {
  content: '\e756';
}
.el-icon-office-building:before {
  content: '\e757';
}
.el-icon-toilet-paper:before {
  content: '\e758';
}
.el-icon-notebook-2:before {
  content: '\e759';
}
.el-icon-notebook-1:before {
  content: '\e75a';
}
.el-icon-files:before {
  content: '\e75b';
}
.el-icon-collection:before {
  content: '\e75c';
}
.el-icon-receiving:before {
  content: '\e75d';
}
.el-icon-suitcase-1:before {
  content: '\e760';
}
.el-icon-suitcase:before {
  content: '\e761';
}
.el-icon-film:before {
  content: '\e763';
}
.el-icon-collection-tag:before {
  content: '\e765';
}
.el-icon-data-analysis:before {
  content: '\e766';
}
.el-icon-pie-chart:before {
  content: '\e767';
}
.el-icon-data-board:before {
  content: '\e768';
}
.el-icon-data-line:before {
  content: '\e76d';
}
.el-icon-reading:before {
  content: '\e769';
}
.el-icon-magic-stick:before {
  content: '\e76a';
}
.el-icon-coordinate:before {
  content: '\e76b';
}
.el-icon-mouse:before {
  content: '\e76c';
}
.el-icon-brush:before {
  content: '\e76e';
}
.el-icon-headset:before {
  content: '\e76f';
}
.el-icon-umbrella:before {
  content: '\e770';
}
.el-icon-scissors:before {
  content: '\e771';
}
.el-icon-mobile:before {
  content: '\e773';
}
.el-icon-attract:before {
  content: '\e774';
}
.el-icon-monitor:before {
  content: '\e775';
}
.el-icon-search:before {
  content: '\e778';
}
.el-icon-takeaway-box:before {
  content: '\e77a';
}
.el-icon-paperclip:before {
  content: '\e77d';
}
.el-icon-printer:before {
  content: '\e77e';
}
.el-icon-document-add:before {
  content: '\e782';
}
.el-icon-document:before {
  content: '\e785';
}
.el-icon-document-checked:before {
  content: '\e786';
}
.el-icon-document-copy:before {
  content: '\e787';
}
.el-icon-document-delete:before {
  content: '\e788';
}
.el-icon-document-remove:before {
  content: '\e789';
}
.el-icon-tickets:before {
  content: '\e78b';
}
.el-icon-folder-checked:before {
  content: '\e77f';
}
.el-icon-folder-delete:before {
  content: '\e780';
}
.el-icon-folder-remove:before {
  content: '\e781';
}
.el-icon-folder-add:before {
  content: '\e783';
}
.el-icon-folder-opened:before {
  content: '\e784';
}
.el-icon-folder:before {
  content: '\e78a';
}
.el-icon-edit-outline:before {
  content: '\e764';
}
.el-icon-edit:before {
  content: '\e78c';
}
.el-icon-date:before {
  content: '\e78e';
}
.el-icon-c-scale-to-original:before {
  content: '\e7c6';
}
.el-icon-view:before {
  content: '\e6ce';
}
.el-icon-loading:before {
  content: '\e6cf';
}
.el-icon-rank:before {
  content: '\e6d1';
}
.el-icon-sort-down:before {
  content: '\e7c4';
}
.el-icon-sort-up:before {
  content: '\e7c5';
}
.el-icon-sort:before {
  content: '\e6d2';
}
.el-icon-finished:before {
  content: '\e6cd';
}
.el-icon-refresh-left:before {
  content: '\e6c7';
}
.el-icon-refresh-right:before {
  content: '\e6c8';
}
.el-icon-refresh:before {
  content: '\e6d0';
}
.el-icon-video-play:before {
  content: '\e7c0';
}
.el-icon-video-pause:before {
  content: '\e7c1';
}
.el-icon-d-arrow-right:before {
  content: '\e6dc';
}
.el-icon-d-arrow-left:before {
  content: '\e6dd';
}
.el-icon-arrow-up:before {
  content: '\e6e1';
}
.el-icon-arrow-down:before {
  content: '\e6df';
}
.el-icon-arrow-right:before {
  content: '\e6e0';
}
.el-icon-arrow-left:before {
  content: '\e6de';
}
.el-icon-top-right:before {
  content: '\e6e7';
}
.el-icon-top-left:before {
  content: '\e6e8';
}
.el-icon-top:before {
  content: '\e6e6';
}
.el-icon-bottom:before {
  content: '\e6eb';
}
.el-icon-right:before {
  content: '\e6e9';
}
.el-icon-back:before {
  content: '\e6ea';
}
.el-icon-bottom-right:before {
  content: '\e6ec';
}
.el-icon-bottom-left:before {
  content: '\e6ed';
}
.el-icon-caret-top:before {
  content: '\e78f';
}
.el-icon-caret-bottom:before {
  content: '\e790';
}
.el-icon-caret-right:before {
  content: '\e791';
}
.el-icon-caret-left:before {
  content: '\e792';
}
.el-icon-d-caret:before {
  content: '\e79a';
}
.el-icon-share:before {
  content: '\e793';
}
.el-icon-menu:before {
  content: '\e798';
}
.el-icon-s-grid:before {
  content: '\e7a6';
}
.el-icon-s-check:before {
  content: '\e7a7';
}
.el-icon-s-data:before {
  content: '\e7a8';
}
.el-icon-s-opportunity:before {
  content: '\e7aa';
}
.el-icon-s-custom:before {
  content: '\e7ab';
}
.el-icon-s-claim:before {
  content: '\e7ad';
}
.el-icon-s-finance:before {
  content: '\e7ae';
}
.el-icon-s-comment:before {
  content: '\e7af';
}
.el-icon-s-flag:before {
  content: '\e7b0';
}
.el-icon-s-marketing:before {
  content: '\e7b1';
}
.el-icon-s-shop:before {
  content: '\e7b4';
}
.el-icon-s-open:before {
  content: '\e7b5';
}
.el-icon-s-management:before {
  content: '\e7b6';
}
.el-icon-s-ticket:before {
  content: '\e7b7';
}
.el-icon-s-release:before {
  content: '\e7b8';
}
.el-icon-s-home:before {
  content: '\e7b9';
}
.el-icon-s-promotion:before {
  content: '\e7ba';
}
.el-icon-s-operation:before {
  content: '\e7bb';
}
.el-icon-s-unfold:before {
  content: '\e7bc';
}
.el-icon-s-fold:before {
  content: '\e7a9';
}
.el-icon-s-platform:before {
  content: '\e7bd';
}
.el-icon-s-order:before {
  content: '\e7be';
}
.el-icon-s-cooperation:before {
  content: '\e7bf';
}
.el-icon-bell:before {
  content: '\e725';
}
.el-icon-message-solid:before {
  content: '\e799';
}
.el-icon-video-camera:before {
  content: '\e772';
}
.el-icon-video-camera-solid:before {
  content: '\e796';
}
.el-icon-camera:before {
  content: '\e779';
}
.el-icon-camera-solid:before {
  content: '\e79b';
}
.el-icon-download:before {
  content: '\e77c';
}
.el-icon-upload2:before {
  content: '\e77b';
}
.el-icon-upload:before {
  content: '\e7c3';
}
.el-icon-picture-outline-round:before {
  content: '\e75f';
}
.el-icon-picture-outline:before {
  content: '\e75e';
}
.el-icon-picture:before {
  content: '\e79f';
}
.el-icon-close:before {
  content: '\e6db';
}
.el-icon-check:before {
  content: '\e6da';
}
.el-icon-plus:before {
  content: '\e6d9';
}
.el-icon-minus:before {
  content: '\e6d8';
}
.el-icon-help:before {
  content: '\e73d';
}
.el-icon-s-help:before {
  content: '\e7b3';
}
.el-icon-circle-close:before {
  content: '\e78d';
}
.el-icon-circle-check:before {
  content: '\e720';
}
.el-icon-circle-plus-outline:before {
  content: '\e723';
}
.el-icon-remove-outline:before {
  content: '\e722';
}
.el-icon-zoom-out:before {
  content: '\e776';
}
.el-icon-zoom-in:before {
  content: '\e777';
}
.el-icon-error:before {
  content: '\e79d';
}
.el-icon-success:before {
  content: '\e79c';
}
.el-icon-circle-plus:before {
  content: '\e7a0';
}
.el-icon-remove:before {
  content: '\e7a2';
}
.el-icon-info:before {
  content: '\e7a1';
}
.el-icon-question:before {
  content: '\e7a4';
}
.el-icon-warning-outline:before {
  content: '\e6c9';
}
.el-icon-warning:before {
  content: '\e7a3';
}
.el-icon-goods:before {
  content: '\e7c2';
}
.el-icon-s-goods:before {
  content: '\e7b2';
}
.el-icon-star-off:before {
  content: '\e717';
}
.el-icon-star-on:before {
  content: '\e797';
}
.el-icon-more-outline:before {
  content: '\e6cc';
}
.el-icon-more:before {
  content: '\e794';
}
.el-icon-phone-outline:before {
  content: '\e6cb';
}
.el-icon-phone:before {
  content: '\e795';
}
.el-icon-user:before {
  content: '\e6e3';
}
.el-icon-user-solid:before {
  content: '\e7a5';
}
.el-icon-setting:before {
  content: '\e6ca';
}
.el-icon-s-tools:before {
  content: '\e7ac';
}
.el-icon-delete:before {
  content: '\e6d7';
}
.el-icon-delete-solid:before {
  content: '\e7c9';
}
.el-icon-eleme:before {
  content: '\e7c7';
}
.el-icon-platform-eleme:before {
  content: '\e7ca';
}
.el-icon-loading {
  -webkit-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
.el-icon--right {
  margin-left: 5px;
}
.el-icon--left {
  margin-right: 5px;
}
@-webkit-keyframes rotating {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
@keyframes rotating {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
</style>
