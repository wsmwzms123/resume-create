<template>
  <header class="profile">
    <Icon href="#icon-avatar-girl"></Icon>
  </header>
</template>

<script>
import Icon from '@/components/Icon.js'
export default {
  name: 'Header',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
  header.profile {
    background: #fafafa;
    height: 320px;
  }
</style>
