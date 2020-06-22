<template>
    <div class="Favourite">
      <h3>
        <span><img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" /></span>
        猜你喜欢
      </h3>
      <van-card v-for="(item,index) in recommendList" :key="index"
        tag="可订明日"
        :price="item.price"
        :title="item.title"
        :thumb="item.imgUrl"
        centered
        @click="getDetails(item.id)"
      >
        <template #tags>
          <van-rate v-model="item.score" allow-half void-icon="star" void-color="#eee" readonly  />
          <van-tag plain type="danger">{{item.comment}}条评论</van-tag>
        </template>
      </van-card>
    </div>
</template>

<script>
    export default {
      props:["recommendList"],
      name: "Favourite",
      data() {
          return {
          }
      },
      components: {},
      methods:{
        //跳转到details中
        getDetails(id){
          this.$router.push({
            name:'detail',
            params:{
              id:id
            }
          })
        }
      },
      filter:{
        price(value){
          return "¥"+value+"元"
        }
      }
    }

</script>

<style lang="less" scoped>
  .Favourite{
    h3{
      font-size:.32rem;
      padding:.24rem .24rem 0;
      color: #212121;
    }
    .van-card{
      .van-card__title {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }



</style>
