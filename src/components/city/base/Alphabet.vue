<template>
  <div class="alphabet">
    <ul>
      <li v-for="(item,key) in cities" :key="item.id" @click="handleClick(key)">{{key}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        props:["cities"],
        name: "CityAlphabet",
        data() {
            return {}
        },
        methods:{
          ...mapMutations(["changLetter"]),
          handleClick(key){
            this.changLetter(key)
          }
        },
        components: {}
    }

</script>

<style lang="stylus" scoped>
  .alphabet
    position:fixed
    display:flex
    flex-direction:column
    justify-content:center
    right:0
    top:1.58rem
    bottom:0
    width:.4rem
  li
    line-height:.5rem
    text-align:center
    color:#00bcd4
    font-weight:600
</style>
