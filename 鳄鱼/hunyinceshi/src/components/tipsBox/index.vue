<template>
  <div>
    <div  class="top_order" @click="toOrder">
      <div class="top_order_close_box">
        <img
          src="../../assets/images/cha.png"
          alt=""
          class="top_order_close"
        />你最近有测算订单哦～
      </div>
      <img
        src="../../assets/images/top_order_btn.04e84c9e.png"
        alt=""
        class="top_order_btn"
        
      />
    </div>
  </div>
</template>

<script>
import { orderQueryUrl } from "../../config";
export default {
methods:{
toOrder(){    
window.location.href = orderQueryUrl;
}

}


};
</script>

<style lang="less" scoped>
.top_order {
  height: 50px;
  width: 100%;
  background: rgba(16, 4, 3, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  font-size: 14px;

  .top_order_close_box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    white-space: nowrap;
  }

  .top_order_close {
    width: 25px;
    height: 25px;
    cursor: pointer;
    padding: 5px 5px 5px 5px;
    box-sizing: content-box;
  }

  .top_order_btn {
    width: 100px ;
    height: 35px ;
    padding: 3px 4px 3px 16px;
    cursor: pointer;
    box-sizing: content-box;
    font-weight: 700;
  }
}
</style>
