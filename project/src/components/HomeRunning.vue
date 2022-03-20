<template>
  <div class="HomeRunning_component">
    <div class="content">
      内容纯属娱乐，暂不向未满18岁青少年提供服务。本网页数据安全由阿里云提供，严格按照法律法规和用户协议对您的信息进行全方位的保护，请放心使用！
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-Running',
  data: function () {
    return {};
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.HomeRunning_component {
  position: absolute;
  top: 0;
  background: #f3a4a6;
  width: 100%;
  height: 38px;
  overflow: hidden;
  font-size: 24px;
  z-index: 1;
  .content {
    color: rgba(255, 255, 255, 0.7);
    transform: translateX(100%);
    animation: running 20s linear infinite;
    @keyframes running {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
