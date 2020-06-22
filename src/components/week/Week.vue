<template>
    <div class="Week">
      <week-header></week-header>
      <week-list :weekInfo="weekInfo"></week-list>
    </div>
</template>

<script>
  import WeekHeader from './base/Header'
  import WeekList from './base/List'
  import {getWeeks} from "@/api";
    export default {
        name: "Week",
        data() {
            return {
              weekInfo:[]
            }
        },
      activated() {
          this.getData()
      },
      methods:{
          async getData(){
            let {weekInfo} = await getWeeks(this.$route.params.id)
            this.weekInfo = weekInfo
            console.log(weekInfo)
          }
      },
      components: {
          WeekHeader,
          WeekList
        }
    }

</script>

<style scoped>

</style>
