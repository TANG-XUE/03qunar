<template>
  <div class="header" ref="header">
    <router-link tag="i" v-show="isShow" to="/" class="header-goback iconfont icon-fanhui"></router-link>
    <div class="header-fixed" v-show='!isShow' :style="styObj" >
      <router-link class='iconfont icon-fanhui header-back' tag="i" to="/"></router-link>
      <h2>景点详情</h2>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DetailHeader",
      data() {
          return {
            isShow:true,
            styObj:{}
          }
      },
      methods:{
        handleScroll(){
          let scrollTop = document.documentElement.scrollTop;
          if(scrollTop>40){
            this.isShow = false
            this.styObj = {
              opacity:(scrollTop-40)/100
            }
          }else {
            this.isShow = true
          }
        }
      },
      activated() {
        window.addEventListener('scroll',this.handleScroll)
      },
      deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
      },
      components: {}
    }

</script>

<style lang="stylus" scoped>
  .header
    position:fixed
    left:0
    top:0
    right:0
    z-index:1
    .header-goback
      position:absolute
      width: .8rem
      height: .8rem
      line-height: .8rem
      border-radius: 50%
      text-align: center
      background: rgba(0, 0, 0, .8)
      color:#fff
    .header-fixed
      position:relative
      background:#00bcd4
      line-height:.86rem
      color:#fff
      text-align:center
      .header-back
        position:absolute
        left:0
        top:0
        width:.8rem
        color:#fff
      h2
        text-align:center
        font-size:.32rem
</style>
