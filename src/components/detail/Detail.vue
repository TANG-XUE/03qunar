<template>
    <div class="Detail">
      <detail-header></detail-header>
      <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-card :cardInfo="cardInfo"></detail-card>
      <detail-recommend :recommendInfo="recommendInfo">
        <h3 class="border-bottom">去哪儿推荐</h3>
      </detail-recommend>
      <detail-calendar :calendarInfo="calendarInfo"></detail-calendar>
      <detail-comment :commentInfo="commentInfo"></detail-comment>
    </div>
</template>

<script>
    import {getDetails} from "@/api";
    import DetailBanner from './base/Banner'
    import DetailHeader from './base/Header'
    import DetailCard from './base/Card'
    import DetailRecommend from './base/Recommend'
    import DetailCalendar from './base/Calendar'
    import DetailComment from './base/Comment'

    export default {
      name: "Detail",
      data() {
          return {
            bannerImg:'',
            sightName:'',
            gallaryImgs:[],
            cardInfo:[],
            recommendInfo:[],
            calendarInfo:[],
            commentInfo:[]
          }
      },
      activated() {
        this.getData();
      },
      methods:{
        async getData(){
          let {bannerImg,cardInfo,gallaryImgs,recommendInfo,sightName,calendarInfo,commentInfo} = await getDetails(this.$route.params.id)
          this.bannerImg = bannerImg
          this.sightName = sightName
          this.gallaryImgs = gallaryImgs
          this.cardInfo = cardInfo
          this.recommendInfo = recommendInfo
          this.calendarInfo = calendarInfo
          this.commentInfo = commentInfo
        }
      },
      components: {
        DetailBanner,
        DetailHeader,
        DetailCard,
        DetailRecommend,
        DetailCalendar,
        DetailComment
      }
    }

</script>

<style lang='stylus' scoped>
  .Detail{
    height:3000px
  }
  .border
    &::before
      border-color:#a5e4ec
  .border-bottom
    &::before
      border-color:#ddd
  .recommend
    padding:0 .2rem
    border-bottom:.2rem solid #f5f5f5
    background-color :#fff
  h3
    line-height:1rem
    font-size:.32rem
  .recommend-info
    display:flex
    justify-content:space-between
    padding:.2rem 0
    .recommend-left
      width:5.72rem
      color:#616161
      h4
        display: -webkit-box
        overflow:hidden
        line-height:.6rem
        font-size:.3rem
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
      p
        line-height:.5rem
        font-size:.28rem
      span
        color:#00afc7
        font-size:.24rem
    .recommend-right
      display:flex
      flex-direction:column
      justify-content:center
      width:1.8rem
      text-align:center
      span
        color:#ff9852
        font-size:.35rem
        font-weight:400
      .recommend-button
        height:.6rem
        color:#fff
        background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
        line-height:.6rem
        border-radius:.1rem

</style>
