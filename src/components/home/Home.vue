<template>
    <div class="Home">
        <home-header></home-header>
        <div class="wrapper-box" ref='wrapper'>
          <div>
            <home-banner :swiperList="swiperList"></home-banner>
            <home-nav :NavList="NavList"></home-nav>
            <home-favourite :recommendList="recommendList"></home-favourite>
            <home-weekend :weekendList="weekendList"></home-weekend>
          </div>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  import {getHome} from "@/api";

  import HomeHeader from './base/Header.vue'
  import HomeBanner from './base/Banner.vue'
  import HomeNav from './base/Nav.vue'
  import HomeFavourite from './base/Favourite.vue'
  import HomeWeekend from './base/Weekend.vue'

    export default {
      name: "Home",
      data() {
          return {
            swiperList:[],
            NavList:[],
            recommendList:[],
            weekendList:[]
          }
      },
      activated() {
        this.getData()
      },
      mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
        })
      },
      methods:{
          async getData(){
            let {swiperList,iconList,recommendList,weekendList} = await getHome()
            this.swiperList = swiperList
            this.NavList = iconList
            this.recommendList = recommendList
            this.weekendList = weekendList
          }
      },
      components: {
          HomeHeader,
          HomeBanner,
          HomeNav,
          HomeFavourite,
          HomeWeekend
        },

    }

</script>

<style lang="less" scoped>
  .wrapper-box{
    position:fixed;
    left:0;
    right:0;
    top:55px;
    bottom:0;
    overflow:hidden;
  }
</style>
