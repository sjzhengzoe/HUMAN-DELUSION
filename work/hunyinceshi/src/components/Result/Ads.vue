<template>
  <div class="Ads_component common_banner_bg">
    <img class="common_title" src="../../assets/ResultAds_title.png" alt="" />
    <div
      class="items_box"
      @click="() => toJump(item.url)"
      v-for="(item, idx) in adsData"
      :key="idx"
    >
      <img class="banner" :src="item.banner" alt="" v-if="idx % 3 == 0" />
      <div class="item_box flex f-sb f-y-c">
        <div>
          <div class="title">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="flex f-y-c">
            <div class="flex f-y-c numbers_box">
              <img
                class="icon"
                src="data:image/png;base64,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"
                alt=""
              />
              <span class="num">{{ item.view }}</span> 已测试
            </div>
            <div class="flex f-y-c numbers_box">
              <img
                class="icon"
                src="data:image/png;base64,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"
                alt=""
              />
              <span class="num">{{ item.good }}</span> 好评
            </div>
          </div>
        </div>
        <img class="img" :src="item.icon" alt="" v-if="idx % 3 !== 0" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonTools from '../../utils/CommonTools';
export default {
  name: 'Ads-component',
  computed: {
    adsData() {
      return [
          {
              "banner": "https://s.xymlcs.com/product/banners/hunianyunshi.png",
              "icon": '',
              "name": "虎年运势",
              "desc": "未来一年能否时来运转、成功逆袭?",
              "view": "2352361",
              "good": "98.88",
              "url": "https://t.yushics.com/hnyslong/#/?qd=again_xl_renge",
          },
          {
              "banner": "https://cs.xymlcs.com/twelve/img/1.cabd3caf.png",
              "icon": 'https://s.xymlcs.com/product/icons/ziweidoushu.png',
              "name": "紫微斗数",
              "desc": "老师亲批一生感情财富事业运",
              "view": "2125181",
              "good": "98.68",
              "url": 'https://cs.xymlcs.com/zwds/?eventCode='+ CommonTools.eventList.RP + '&traceCode='+CommonTools.getTraceCode() + '&PChan=' + CommonTools.getPChan(),
          },
          {
              "banner": "https://cs.xymlcs.com/twelve/img/1.cabd3caf.png",
              "icon": 'https://s.xymlcs.com/product/icons/yishengcaiyun.png',
              "name": "一生财运",
              "desc": "亲批一生财富，解密你至今财运未开的原因",
              "view": "2069678",
              "good": "97.80",
              "url": "https://t.yushics.com/scysxp/#/?qd=again_renge_bzms",
          },
          {
              "banner": "https://s.xymlcs.com/product/banners/jiduanhunyin.png",
              "icon": 'https://cs.xymlcs.com/twelve/img/3.73e52d7d.png',
              "name": "婚姻测算",
              "desc": "今生你会有几段刻骨铭心的婚姻",
              "view": "2082368",
              "good": "98.60",
              "url": 'https://cs.xymlcs.com/hycs/?eventCode='+ CommonTools.eventList.RP + '&traceCode='+CommonTools.getTraceCode() + '&PChan=' + CommonTools.getPChan(),
          },
          {
              "banner": "https://cs.xymlcs.com/twelve/img/4.8e36893e.png",
              "icon": 'https://s.xymlcs.com/product/icons/hehunpeidui.png',
              "name": "姓名配对",
              "desc": "原来两个人的名字，一开始就注定了结局",
              "view": "1884215",
              "good": "97.66",
              "url": 'https://cs.xymlcs.com/xmpd/?eventCode='+ CommonTools.eventList.RP + '&traceCode='+CommonTools.getTraceCode() + '&PChan=' + CommonTools.getPChan()
          },
          {
              "banner": "https://cs.xymlcs.com/twelve/img/4.8e36893e.png",
              "icon": 'https://s.xymlcs.com/product/icons/zhengyuanhuaxiang.png',
              "name": "另一半画像",
              "desc": "TA是你心中期待的样子么？高矮胖瘦？眉眼口鼻？",
              "view": "1662880",
              "good": "96.85",
              "url": "https://t.yushics.com/zalong/#/?qd=again_renge_zahx"
          },
          {
              "banner": "https://s.xymlcs.com/product/banners/yishengyinyuan.png",
              "icon": 'https://cs.xymlcs.com/twelve/img/6.cabca4f0.png',
              "name": "姻缘测算",
              "desc": "你这一生会有几段姻缘？正缘何时到来？",
              "view": "1981364",
              "good": "98.55",
              "url": "https://t.yushics.com/index/yy01/long.html?qd=again_renge_yycs"
          },
          {
              "banner": "https://cs.xymlcs.com/twelve/img/7.376c7f60.png",
              "icon": 'https://s.xymlcs.com/product/icons/xingmingxiangpi.png',
              "name": "姓名详批",
              "desc": "看看你的姓名是旺运还是败运?",
              "view": "1182645",
              "good": "95.77",
              "url": "https://t.yushics.com/index/bazijpone/index.html?qd=again_renge_xmcs"
          },
          {
              "banner": "https://cs.xymlcs.com/twelve/img/7.376c7f60.png",
              "icon": 'https://s.xymlcs.com/product/icons/qiming.png',
              "name": "起名改名",
              "desc": "取名改名，一名之得，可以成龙",
              "view": "1126858",
              "good": "95.60",
              "url": "https://t.yushics.com/bb/"
          },
      ];
    },
  },
  methods: {
    toJump(url) {
      window.location.href = url
    },
  },
};
</script>

<style lang="less" scoped>
.Ads_component {
  background: url('../../assets/ResultsAds_bg.png') top no-repeat;
  background-size: 100% auto;
  background-color: #fff;
  margin-top: 120px;
  width: 100%;
  padding: 60px 30px 30px;
  margin-bottom: 0 !important;
  .items_box {
    .banner {
      width: 690px;
    }
    .item_box {
      padding: 28px 0;
      border-bottom: 1px solid #eee;
      .title {
        font-weight: 700;
        color: #000;
        margin-bottom: 8px;
        font-size: 38px;
      }
      .img {
        width: 150px;
        height: 150px;
      }
      .numbers_box {
        color: #656565;
        font-size: 24px;
        margin-right: 20px;
        margin-bottom: 20px;
      }
      .desc {
        font-size: 30px;
        color: #000;
        margin-bottom: 8px;
      }
      .icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .num {
        color: rgb(255, 96, 96);
      }
    }
  }
}
</style>
