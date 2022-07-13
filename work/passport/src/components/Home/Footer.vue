<template>
  <div class="Footer_component">
    <div class="limit">
      <img class="logo" src="@/assets/pc/logo_bottom.png" alt="" />
      <div class="net">PASSPORTPHOTOGENIE.COM</div>
      <div class="other_page flex flex-w f-sb">
        <div class="link">About</div>
        <div class="link">Terms of Service</div>
        <div class="link">Privacy Policy</div>
        <div class="link">Other languages</div>
        <div class="link">Contact</div>
        <div class="link">Help</div>
      </div>
      <div class="other_choose flex f-y-c">
        <div class="language flex f-y-c">Other languages</div>
        <div class="email flex f-y-c f-x-c">
          <img class="icon_email" src="@/assets/pc/footer_email_icon.png" alt="" />
          <span>sudishfiuh@uhd.com</span>
        </div>
      </div>
    </div>
    <div class="terms_box">
      <div class="width_limit flex f-sb f-y-c">
        <div class="copyright">Copyright © 2006-2022</div>
        <div class="flex f-y-c card_box">
          <span class="accept_card">We accept all the major ones Debit card/Credit Card</span>
          <img class="icon flex" src="../../assets/pc/footer_terms_icon1.png" alt="" />
          <img class="icon" src="../../assets/pc/footer_terms_icon2.png" alt="" />
          <img class="icon" src="../../assets/pc/footer_terms_icon3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer-component',
};
</script>

<style lang="less" scoped>
.Footer_component {
  width: 100%;
  height: 486px;
  background: url('@/assets/pc/footer_bg.png') top/cover no-repeat;
  .limit {
    position: relative;
    width: 1176px;
    margin: 0 auto;
    padding: 149px 0 0;
    .logo {
      width: 68px;
      height: 81px;
      margin-bottom: 13px;
    }
    .net {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 42px;
      margin-bottom: 40px;
    }
    .other_page {
      width: 400px;
      .link {
        width: 50%;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
        margin-bottom: 21px;
      }
    }
    .other_choose {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
      position: absolute;
      left: 413px;
      bottom: 94px;
      .language {
        width: 175px;
        height: 35px;
        background: url('../../assets/pc/footer_language_bg.png') center/contain no-repeat;
        margin-right: 28px;
        padding-left: 44px;
      }
      .email {
        width: 198px;
        height: 34px;
        background: rgba(103, 175, 255, 0.37);
        border-radius: 17px;
        border: 1px solid #1c7be4;
        .icon_email {
          width: 21px;
          height: 21px;
          margin-right: 10px;
        }
      }
    }
  }
  .terms_box {
    width: 100%;
    background: #001839;
    .width_limit {
      width: 1166px;
      height: 54px;
      margin: 0 auto;
      .copyright,
      .accept_card {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #888888;
        line-height: 17px;
        margin-right: 19px;
      }
      .card_box {
        margin-right: -41px;
      }

      .icon {
        width: 38px;
        height: 34px;
        margin-right: 7px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
