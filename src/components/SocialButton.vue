<script setup lang="ts">
defineProps<{
  link: string,
  icon: Array<string> // Usage: e.g. ['fas', 'heart']
}>()
</script>

<template>
<a :href="link" target="_blank">
  <font-awesome-icon :icon="icon" size="lg"/>
</a>
</template>

<script lang="ts">
export default {
  name: 'SocialButton'
}
</script>

<style lang="scss" scoped>
@import url('@/styles/socialButtons.scss');
</style>
