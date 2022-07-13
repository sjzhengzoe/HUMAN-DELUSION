<template>
  <div class="PopularDocuments_component flex f-sb f-y-c" v-if="list.length > 0">
    <div class="limit">
      <div class="title">POPULAR DOCUMENTS IN THE WORLD</div>
      <div class="flex f-sb f-y-start flex-w">
        <template v-for="(item, idx) in list">
          <div
            class="item flex-y f-x-c f-y-c"
            v-if="(!isShowMore && idx < 12) || isShowMore"
            :key="idx"
          >
            <img class="img" :src="item.photoType.picUrl" alt="" />
            <div class="title_small">{{ item.photoType.name }}</div>
          </div>
        </template>
      </div>
      <div v-if="!isShowMore && list.length > 20" class="show_more_btn" @click="isShowMore = true">
        SHOW MORE
      </div>
    </div>
  </div>
</template>

<script>
import * as Api from '../../api/api';
export default {
  name: 'PopularDocuments-component',
  data: function () {
    return {
      isShowMore: false,
      list: [],
    };
  },
  async mounted() {
    const { data } = await Api.getHotInfo();
    this.list = data.data;
  },
};
</script>

<style lang="less" scoped>
.PopularDocuments_component {
  width: 100%;
  padding: 87px 0 23px;
  position: relative;
  .limit {
    width: 1228px;
    margin: 0 auto;
  }
  .title {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 50px;
    margin: 0 0 54px;
    text-align: center;
  }
  .item {
    width: 173px;
    height: 178px;
    box-shadow: 0px 10px 13px 0px #e8edf2;
    border-radius: 13px;
    border: 1px solid #d3dadf;
    margin: 0 38px 38px 0;
    &:nth-child(6n) {
      margin-right: 0;
    }
    .img {
      margin-bottom: 21px;
      height: 78px;
    }
    .title_small {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 22px;
      text-align: center;
    }
  }
  .show_more_btn {
    position: absolute;
    bottom: -52px;
    left: 0;
    right: 0;
    width: fit-content;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(7, 28, 67, 0.53);
    line-height: 28px;
    padding: 13px 58px;
    border-radius: 27px;
    margin: 0 auto;
    cursor: pointer;
    border: 1px solid rgba(151, 151, 151, 0.53);
  }
}
</style>
