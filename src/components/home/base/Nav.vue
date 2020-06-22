<template>
  <div class="nav">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(imgs,index) in filterImgs" :key="index" v-if="filterImgs.length>0">
        <div class="nav">
          <div class="item" v-for="item in imgs" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <span>{{item.desc}}</span>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
      props:["NavList"],
      name: "HomeNav",
      data() {
          return {
            swiperOption:{
              pagination: {
                el: '.swiper-pagination'
              },
            },
          }
      },
      components: {},
      computed: {
        filterImgs() {
          //定义一个存放2维数组的空数组
          let imgs = []
          //遍历原一位数组 item参数为值，index为索引
          this.NavList.forEach((item,index)=>{
            let page = ~~(index/8) //取余数所以1到7索引都得0
            if(!imgs[page]){
              imgs[page]=[]
            }
            imgs[page].push(item)
          })
          return imgs
        }
      },
    }

</script>

<style lang="less" scoped>
  .nav{
    background-color:#fff;
    display:flex;
    flex-wrap:wrap;
    height:3.8rem;
    padding-bottom:.4rem;
    .item{
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      width:25%;
      height:48%;
      img{
        width:1.1rem;
        height:1.1rem;
      }
    }
  }
</style>
