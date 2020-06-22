<template>
  <div class="header">
    <router-link tag="i" to="/" class="iconfont icon-fanhui header-back"></router-link>
    <h2>城市选择</h2>
  </div>
</template>

<script>
    export default {
        name: "CityHeader",
        data() {
            return {}
        },
        components: {}
    }

</script>

<style lang="less" scoped>
  .header{
    position:relative;
    height:.88rem;
    line-height:.88rem;
    background-color:#00bcd4;
    align-items:center;
    color:#fff;
    .header-back{
      position:absolute;
      text-align:center;
      left:0;
      top:0;
      width:.88rem;
      color:#fff;
    }
    h2{
      text-align:center;
      font-size:.32rem;
    }
  }
</style>
