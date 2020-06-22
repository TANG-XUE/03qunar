<template>
  <div class='calendar'>
    <ul class='calendar-title border-bottom'>
      <li @click="handleTicket">门票</li>
      <li @click="handleTourist">一日游</li>
    </ul>
    <div  class='calendar-item' v-for='(item,index) in calendarInfo' :key="index">
      <h3 class='border-bottom' ref="tangxue">{{item.calendarInfo.title}}</h3>
      <div class="calendar-info border-bottom"  @click='handleClick(result)' v-for='(result,index) in item.calendarInfo.result' :key="index" >
        <div class="calendar-left">
          <h4 class="calendar-title">{{result.subtitle}}</h4>
        </div>
        <div class="calendar-right">
          <span>¥{{result.price}}<i class='iconfont icon-jiantouxiangxia' :style="result.styleObj"></i></span>
        </div>
        <detail-recommend v-show='result.isShow' :recommendInfo="result.recommendInfo"></detail-recommend>
      </div>
    </div>
  </div>
</template>

<script>
  import DetailRecommend from '@/components/detail/base/Recommend'
    export default {
      props:["calendarInfo"],
      name: "DetailCalendar",
      data() {
          return {}
      },
      methods:{
        handleClick(result){
          //点击显示隐藏隐藏的组件
          result.isShow = !result.isShow
          //点击箭头向上向下  根据0==false，1==true，为1则旋转180度
          result.styleObj.transform = 'rotate('+result.isShow*180 +'deg)'
        },
        //点击门票的跳到指定地方
        handleTicket(){
          document.documentElement.scrollTop = this.$refs.tangxue[0].offsetTop-85
        },
        handleTourist(){
          document.documentElement.scrollTop = this.$refs.tangxue[2].offsetTop-45
        }
      },
      components: {
        DetailRecommend
      }
    }

</script>

<style lang='stylus' scoped>
  .recommend
    width:94%
  .calendar .recommend >>> .recommend
    width:94%
  .calendar .recommend >>> .recommend-title
    line-height:.4rem
  .border-bottom
    &::before
      border-color:#ccc
  .calendar
    background-color:#fff
  .recommend
    background-color:#f5f5f5
  .calendar-item
    padding:0 .2rem
    border-bottom:.2rem solid #f5f5f5
  .calendar-title
    display:flex
    li
      width:50%
      height:1rem
      line-height:1rem
      text-align:center
      font-size:.3rem
  h3
    line-height:1rem
    font-size:.32rem
  .calendar-info
    display:flex
    flex-wrap: wrap
    justify-content:space-between
    padding: .1rem 0
    .calendar-left
      width:5.3rem
      color:#616161
      h4
        display: -webkit-box
        overflow:hidden
        line-height:.6rem
        font-size:.28rem
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
      p
        line-height:.5rem
        font-size:.28rem
      span
        color:#00afc7
        font-size:.24rem
    .calendar-right
      display:flex
      flex-direction:column
      justify-content:center
      width:1.8rem
      text-align:center
      span
        color:#ff9852
        font-size:.35rem
        font-weight:400
        &::first-letter
          font-size:.24rem
        i
          position:absolute
          font-size:.24rem
          color:#bbb
</style>
