<template>
  <router-view/>
  <Footer :year="2022"/>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>

<style lang="scss">
@import url('@/styles/app.scss');
</style>
