<template>
    <div class="FadeAnimation">
      <transition name="tangxue">
        <slot></slot>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "FadeAnimation",
        data() {
            return {}
        },
        components: {}
    }

</script>

<style lang='stylus' scoped>
  .tangxue-enter,.tangxue-leave-to
    opacity:0
  .tangxue-enter-active,.tangxue-leave-active
    transition:opacity .5s
</style>
