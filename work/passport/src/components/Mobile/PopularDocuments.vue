<template>
  <div class="PopularDocuments_component flex f-sb f-y-c" v-if="list.length > 0">
    <div class="limit">
      <div class="title">POPULAR DOCUMENTS IN THE WORLD</div>
      <div class="flex f-sb f-y-start flex-w">
        <template v-for="(item, idx) in list">
          <div
            class="item flex f-y-c"
            v-if="(!isShowMore && idx < 12) || isShowMore"
            :key="idx"
            @click="() => jumpLink(item)"
          >
            <img class="img" src="@/assets/m/home-passport.png" alt="" />
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
  methods: {
    jumpLink(item) {
      this.$router.push({ path: '/country-photo', query: { photoTypeId: item.photoType.id } });
    },
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
  padding: 77px 81px 84px;
  .limit {
    width: 1228px;
    margin: 0 auto;
  }
  .title {
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
    text-align: center;
    margin-bottom: 98px;
  }
  .item {
    width: 588px;
    border-bottom: 1px solid #bfbfbf;
    padding: 36px 0 31px;

    .img {
      width: 48px;
      height: 57px;
      margin-right: 37px;
    }
    .title_small {
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #010101;
      line-height: 45px;
    }
  }
  .show_more_btn {
    width: fit-content;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(7, 28, 67, 0.53);
    line-height: 50px;
    padding: 17px 62px;
    border-radius: 42px;
    border: 1px solid rgba(151, 151, 151, 0.53);
    margin: 90px auto 0;
  }
}
</style>
