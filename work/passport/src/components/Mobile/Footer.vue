<template>
  <div class="Footer_component">
    <div class="net_box">
      <img class="logo" src="@/assets/m/logo_bottom.png" alt="" />
      <div class="net">PASSPORTPHO<br />TOGENIE.COM</div>
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
          <img class="icon_email" src="@/assets/m/footer_email_icon.png" alt="" />
          <span>sudishfiuh@uhd.com</span>
        </div>
      </div>
    </div>
    <div class="terms_box">
      <div class="icon_box flex f-y-c">
        <img class="icon" src="../../assets/m/footer_terms_icon1.png" alt="" />
        <img class="icon" src="../../assets/m/footer_terms_icon2.png" alt="" />
        <img class="icon" src="../../assets/m/footer_terms_icon3.png" alt="" />
      </div>
      <div class="accept_card">We accept all the major ones Debit card/Credit Card</div>
      <div class="copyright">Copyright © 2006-2022</div>
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
  background: url('@/assets/m/footer_bg.png') top/contain no-repeat;
  .net_box {
    padding: 65px 50px 0;
  }
  .logo {
    width: 72px;
    height: 87px;
    margin-bottom: 24px;
  }
  .net {
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 70px;
    margin-bottom: 63px;
  }
  .other_page {
    width: 600px;
    .link {
      width: 50%;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 45px;
      margin-bottom: 63px;
    }
  }
  .other_choose {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 34px;
    margin: 0 0 43px -16px;
    .language {
      width: 302px;
      height: 59px;
      background: url('../../assets/m/footer_language_bg.png') center/contain no-repeat;
      margin-right: 41px;
      padding-left: 75px;
    }
    .email {
      width: 342px;
      height: 59px;
      background: rgba(103, 175, 255, 0.37);
      border-radius: 29px;
      border: 2px solid #1c7be4;
      .icon_email {
        width: 36px;
        height: 35px;
        margin-right: 16px;
      }
    }
  }

  .terms_box {
    width: 100%;
    background: #0d3061;
    padding: 35px 0 0 0;
    .icon_box {
      padding: 0 0 24px 35px;
      .icon {
        height: 68px;
        margin-right: 14px;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    .accept_card {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4060b6;
      line-height: 31px;
      padding: 0 36px 25px;
    }
    .copyright {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #888888;
      line-height: 37px;
      padding: 23px 0;
      background: #001839;
      text-align: center;
    }
  }
}
</style>
