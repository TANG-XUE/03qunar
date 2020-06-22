<template>
    <div class="Banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.imgUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
    export default {
      props:["swiperList"],
      name: "HomeBanner",
      data() {
          return {}
      },
      created() {
        console.log(this.swiperList)
      },
      components: {}
    }

</script>

<style lang="less" scoped>
  .Banner{
    .my-swipe {
      .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        img{
          width: 100%;
          height: 150px;
          vertical-align: top;
        }
      }
    }
  }

</style>
