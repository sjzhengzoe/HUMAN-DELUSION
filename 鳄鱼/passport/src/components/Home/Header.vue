<template>
  <div class="Home_component flex f-sb f-y-c">
    <router-link :to="{ path: '/' }">
      <div class="flex f-y-c">
        <img class="logo" src="@/assets/pc/logo_top.png" alt="" />
      </div>
    </router-link>
    <div class="flex f-y-c">
      <router-link :to="{ path: '/faq' }">
        <div class="link">FAQ</div>
      </router-link>
      <div class="link">FIND PHOTOS</div>
      <div class="link">FOR MORE</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-component',
};
</script>

<style lang="less">
.Home_component {
  max-width: 1920px;
  margin: 0 auto;
  height: 95px;
  background: rgba(255, 255, 255, 0.89);
  padding: 0 48px 0 46px;
  .logo {
    height: 36px;
    margin-right: 21px;
  }
  .link {
    font-size: 13px;
    color: #000000;
    margin: 0 16px;
    cursor: pointer;
  }
}
</style>
