<template>
  <div class="Faq_component">
    <img class="banner" src="../../assets/m/faq_banner.png" alt="" />
    <div class="title">PROBLEM LIST</div>
    <div class="content">
      <template v-for="(item, idx) in list">
        <div
          v-if="(!isShowMore && idx <= showNum - 1) || isShowMore"
          class="item"
          :class="{ active: activeIdx == idx }"
          :key="idx"
          @click="activeIdx = activeIdx == idx ? null : idx"
        >
          <div class="limit">
            <div class="que flex f-y-start">
              <img class="icon_que" src="../../assets/m/icon_faq.png" alt="" />
              <span class="text">{{ item.que }}</span>
              <img class="icon_drop f-s-c" src="../../assets/m/icon_drop.png" alt="" />
            </div>
            <div v-if="activeIdx == idx" class="date">{{ item.date }}</div>
            <div v-if="activeIdx == idx" class="ans" v-html="item.ans" />
          </div>
        </div>
      </template>
    </div>
    <div @click="isShowMore = !isShowMore" class="show_more_btn">
      {{ isShowMore ? 'HIDE' : 'SHOW MORE' }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Faq-component',
  data: function () {
    return {
      activeIdx: 1,
      isShowMore: false,
      // faq展示数量
      showNum: 1,
      list: [
        {
          que: 'Permission center cgepermission maintenance process',
          ans: `In the data model of growingio, according to the needs of different analysis scenarios, we have established two sets of user models to express the concepts of access user and login user.<br/>For example:<br/>Xiao Ming saw the H5 advertising page of an e-commerce platform when he brushed the circle of friends on his mobile phone. He clicked the advertising content and entered an H5 page to guide the registration. Xiao Ming filled in his mobile phone number and passed the verification. The registration was successful. He saw a prompt on the success page to download the app and sent 5 full reduction coupons. Xiao Ming downloaded the app and logged in, After choosing the products you like, you can use coupons to settle the accounts and complete the purchase process.<br/>Let's analyze which of the above two typical cases of growingio are suitable for our users.`,
          date: 'June 30, 2021',
        },
        {
          que: 'Permission center cgepermission maintenance process',
          ans: `In the data model of growingio, according to the needs of different analysis scenarios, we have established two sets of user models to express the concepts of access user and login user.<br/>For example:<br/>Xiao Ming saw the H5 advertising page of an e-commerce platform when he brushed the circle of friends on his mobile phone. He clicked the advertising content and entered an H5 page to guide the registration. Xiao Ming filled in his mobile phone number and passed the verification. The registration was successful. He saw a prompt on the success page to download the app and sent 5 full reduction coupons. Xiao Ming downloaded the app and logged in, After choosing the products you like, you can use coupons to settle the accounts and complete the purchase process.<br/>Let's analyze which of the above two typical cases of growingio are suitable for our users.`,
          date: 'June 30, 2021',
        },
        {
          que: 'Permission center cgepermission maintenance process',
          ans: `In the data model of growingio, according to the needs of different analysis scenarios, we have established two sets of user models to express the concepts of access user and login user.<br/>For example:<br/>Xiao Ming saw the H5 advertising page of an e-commerce platform when he brushed the circle of friends on his mobile phone. He clicked the advertising content and entered an H5 page to guide the registration. Xiao Ming filled in his mobile phone number and passed the verification. The registration was successful. He saw a prompt on the success page to download the app and sent 5 full reduction coupons. Xiao Ming downloaded the app and logged in, After choosing the products you like, you can use coupons to settle the accounts and complete the purchase process.<br/>Let's analyze which of the above two typical cases of growingio are suitable for our users.`,
          date: 'June 30, 2021',
        },
        {
          que: 'Permission center cgepermission maintenance process',
          ans: `In the data model of growingio, according to the needs of different analysis scenarios, we have established two sets of user models to express the concepts of access user and login user.<br/>For example:<br/>Xiao Ming saw the H5 advertising page of an e-commerce platform when he brushed the circle of friends on his mobile phone. He clicked the advertising content and entered an H5 page to guide the registration. Xiao Ming filled in his mobile phone number and passed the verification. The registration was successful. He saw a prompt on the success page to download the app and sent 5 full reduction coupons. Xiao Ming downloaded the app and logged in, After choosing the products you like, you can use coupons to settle the accounts and complete the purchase process.<br/>Let's analyze which of the above two typical cases of growingio are suitable for our users.`,
          date: 'June 30, 2021',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.Faq_component {
  .banner {
    width: 100%;
  }
  .title {
    margin: 66px 0 31px 36px;
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 70px;
  }
  .item {
    background: #fff;
    &:last-child {
      .limit {
        border-bottom: 0;
      }
    }
    .limit {
      width: 660px;
      margin: 0 auto;
      border-bottom: 1px dashed #bfbfbf;
    }
    &.active {
      background: rgba(229, 229, 229, 0.18);
      .icon_drop {
        transform: rotate(180deg);
      }
    }

    .que {
      width: 660px;
      padding: 44px 0 66px;
      .icon_que {
        width: 47px;
        height: 47px;
        margin: 10px 23px 0 0;
      }
      .icon_drop {
        width: 35px;
      }
      .text {
        margin: 0 45px 0 10px;
        width: 527px;
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #010101;
        line-height: 45px;
      }
    }
    .date {
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 19px;
      margin: -30px 0 50px 60px;
    }
    .ans {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(42, 46, 50, 0.8);
      line-height: 42px;
      padding: 0 16px 65px 22px;
    }
  }
  .show_more_btn {
    width: 358px;
    border-radius: 42px;
    padding: 17px 0;
    border: 1px solid rgba(151, 151, 151, 0.53);
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(7, 28, 67, 0.53);
    line-height: 50px;
    text-align: center;
    margin: 60px auto 173px;
  }
}
</style>
