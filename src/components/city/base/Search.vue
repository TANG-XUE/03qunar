<template>
    <div class="search">
      <input class="header-input" type="text"
             placeholder="请输入城市名或拼音" value=""
             v-model="keyword"
      />
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul>
          <li class="search-item border-bottom" v-for="(city,index) in filterCities" :key="index" @click="handleClick(city.name)">{{city.name}}</li>
          <li class="search-item border-bottom" v-show="isShow">未匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import {mapMutations} from 'vuex'
    export default {
      props:["cities"],
      name: "CitySearch",
      data() {
          return {
            keyword:''
          }
      },
      mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
        })

      },
      methods:{
        ...mapMutations(['changeCity']),
        handleClick(city){
          this.changeCity(city)
          this.$router.push('/')
        }
      },
      computed:{
        //过滤后的城市
        filterCities(){
          const result = [];
          //循环出键值key值为A-Z的字母
          for(let key in this.cities){
            //遍历A-Z对象中的数组
            this.cities[key].forEach((city,index)=>{
              if(city.name.includes(this.keyword)||city.spell.includes(this.keyword)){
                result.push(city) //把当前搜索的包含相关城市添加到新数组中
              }
            })
          }
          return result;
        },
        //判断filterCities中是否有值
        isShow(){
          return !this.filterCities.length
        }
      },
      components: {},

    }

</script>

<style lang="less" scoped>
  .border-bottom::before{
    border-color:#aaa;
  }
  .search{
    position:relative;
    height:.72rem;
    padding:.1rem;
    background-color:#00bcd4;
    .header-input{
      width:100%;
      height:100%;
      border-radius:.1rem;
      text-align:center;
    }
    .search-content{
      position:fixed;
      z-index:20;
      overflow:hidden;
      top:1.78rem;
      left:0;
      right:0;
      bottom:0;
      background-color:#ccc;
      .search-item{
        line-height:.8rem;
        padding-left:.2rem;
        background:#fff;
      }
    }
  }

</style>
