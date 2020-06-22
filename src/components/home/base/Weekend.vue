<template>
    <div class="Weekend">
      <h3>
        <span><img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" /></span>
        周末去哪儿
      </h3>
      <ul>
        <router-link :to="{name:'week',params:{id:item.id}}" class="item" v-for="(item,index) in weekendList" :key="index">
          <div class="item-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p>
        </router-link>
      </ul>
    </div>
</template>

<script>

    export default {
      props:["weekendList"],
      name: "HomeWeekend",
      data() {
          return {}
      },
      components: {}
    }

</script>

<style lang="less" scoped>
  .Weekend{
    padding: 0.24rem;
    background-color:#fff;
    margin-top:.2rem;
    h3{
      font-size:.32rem;
      padding:.24rem .24rem 0;
      color: #212121;
    }
    .item{
      margin-top: .1rem;
      .item-img{
        height:4.74rem;
        width:100%;
        align-items:unset;
        img{
          width:100%;
          height:100%;
        }
      }
      h2{
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        text-align: left;
      }
      p{
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        text-align: left;
      }
    }
  }
</style>
