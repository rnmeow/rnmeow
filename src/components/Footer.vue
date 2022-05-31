<script setup lang="ts">
defineProps<{
  year: number // Usage: e.g. 2022
}>()
</script>

<template>
<footer>
  <p>
    <font-awesome-icon :icon="['far', 'copyright']"/>
    {{ outputYear(year) }} KuoHuanHuan, licensed under
    <a href="https://github.com/kuohuanhuan/home/blob/master/LICENSE">MIT</a>.
    <br/>
    Developed with
    <font-awesome-icon :icon="['fas', 'heart']"/>
    and <a href="https://vuejs.org" target="_blank">Vue.js</a>
    |
    Built with <a href="https://vitejs.dev" target="_blank">Vite</a>
  </p>
</footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
  methods: {
    outputYear(origYear: number): string {
      const thisYear: number = new Date().getFullYear();
      if (thisYear !== origYear || isNaN(origYear)) {
          return origYear + "-" + thisYear;
      } else return origYear.toString(); // Return inputed year directly if the year is THE SAME as inputed.
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('@/styles/footer.scss');
</style>
