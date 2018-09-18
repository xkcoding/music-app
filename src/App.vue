<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from "_c/m-header/MHeader";
import Tab from "_c/tab/Tab";

export default {
  components: {
    MHeader,
    Tab
  }
};
</script>

<style lang="stylus" scoped>
</style>
