<template>
  <div class="Home_component flex f-sb f-y-c">
    <router-link :to="{ path: '/' }">
      <div class="flex f-y-c">
        <img class="logo" src="@/assets/m/logo_top.png" alt="" />
        <div class="net">PASSPORTPHOTOGENIE.COM</div>
      </div>
    </router-link>
    <img
      class="other_btn"
      @click="isShowOtherPage = !isShowOtherPage"
      src="../../assets/m/header_menu.png"
      alt=""
    />

    <div v-if="isShowOtherPage" class="flex-y f-y-c other_page">
      <div class="link">About</div>
      <div class="link">Privacy Policy</div>
      <div class="link">Contact</div>
      <div class="link">Terms of Service</div>
      <div class="link">Other languages</div>
      <div class="link">Help</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-component',
  data: function () {
    return {
      isShowOtherPage: false,
    };
  },
};
</script>

<style lang="less" scoped>
.Home_component {
  width: 750px;
  height: 119px;
  background: rgba(255, 255, 255, 0.89);
  padding: 0 33px 0 39px;
  .logo {
    height: 60px;
    margin-right: 27px;
  }
  .net {
    font-size: 30px;
    color: #305eb4;
  }
  .other_btn {
    width: 48px;
    height: 42px;
  }
  .other_page {
    background: rgba(34, 68, 131, 0.94);
    position: absolute;
    top: 119px;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 29px;
    z-index: 100;
    .link {
      width: 523px;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 45px;
      padding: 50px 0 50px 12px;

      border-bottom: 1px solid #ffffff;
    }
  }
}
</style>
