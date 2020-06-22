<template>
    <div class="header">
      <van-search class="header-input"
        shape="round"
        show-action
        left
        background="#00bcd4"
        placeholder="请输入搜索关键词"
      >
        <template #left>
          <i class="iconfont icon-fanhui header-back"></i>
        </template>
        <template #action>
          <router-link to='/city' class="header-right" tag="div">
            <span>{{$store.state.city}}</span>
            <i class="iconfont icon-jiantou"></i>
          </router-link>
        </template>
      </van-search>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        data() {
            return {
            }
        },
        components: {}
    }

</script>

<style lang="less" scoped>
  .header{
    .header-input{
      .header-back{
        width:20px;
        text-align:center;
        color:#fff;
      }
      .header-right{color: #fff;}
    }
  }
</style>
