<template>
  <div class="Loading_component flex f-y-c f-x-c">
    <div class="loading_box flex f-x-c f-y-c">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="30px"
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
        xml:space="preserve"
      >
        <path
          fill="#999"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
          transform="rotate(275.098 25 25)"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Common-Loading',
};
</script>

<style lang="less" scoped>
.Loading_component {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f2f2f2;
  z-index: 10;
  .loading_box {
    animation-duration: 2s;
    z-index: 20;
    width: 180px;
    height: 180px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
