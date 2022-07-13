<template>
  <div class="Faq_component">
    <img class="banner" src="../../assets/pc/faq_banner.png" alt="" />
    <div class="content">
      <template v-for="(item, idx) in list">
        <div class="item" :key="idx" @click="activeIdx = idx">
          <div class="limit">
            <div class="que flex f-y-start">
              <span class="text flex-y">
                <div>{{ item.que }}</div>
                <div v-if="activeIdx == idx" class="date">{{ item.date }}</div></span
              >
              <div class="toggle_btn flex f-sb f-y-c">
                <span>READ</span>
                <img class="icon_drop f-s-c" src="../../assets/pc/icon_drop.png" alt="" />
              </div>
            </div>

            <div v-if="activeIdx == idx" class="ans" v-html="item.ans" />
          </div>
        </div>
      </template>
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
  .item {
    background: #fff;

    &:last-child {
      .limit {
        border-bottom: 0;
      }
    }
    .limit {
      width: 1200px;
      margin: 0 auto;
      border-bottom: 1px dashed #bfbfbf;
    }

    .que {
      padding: 50px 0 42px;
      .text {
        width: 946px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #2a2e32;
        line-height: 33px;
        margin-right: 11px;
        .date {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 19px;
          margin-top: 5px;
        }
      }
      .toggle_btn {
        cursor: pointer;
        width: 244px;
        box-sizing: border-box;
        background: #1c7be4;
        border-radius: 6px;
        padding: 21px 33px 21px 40px;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 28px;
        .icon_drop {
          width: 25px;
          height: 13px;
        }
      }
    }

    .ans {
      padding: 33px 75px 33px 61px;
      font-size: 17px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(42, 46, 50, 0.8);
      line-height: 29px;
      margin-top: 24px;
      background: rgba(229, 229, 229, 0.18);
      border-radius: 6px;
    }
  }
}
</style>
