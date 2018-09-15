<template>
  <div>
    <div v-for="(item,index) in slider" :key="`slider_img_${index}`">
      <a :href="item.linkUrl">
        <img :src="item.picUrl" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "api/recommend";
import { ERR_OK } from "api/config";

export default {
  data() {
    return {
      slider: []
    };
  },
  created() {
    this._getRecommend();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.slider = res.data.slider;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
