<template>
  <header class="profile">
    <div class="basic-info">
      <Avatar />
    </div>
  </header>
</template>

<script>
import Avatar from './avatar'
export default {
  name: 'Header',
  components: {
    Avatar
  }
}
</script>

<style lang="scss" scoped>
  header.profile {
    background: #fafafa;
    height: 320px;
    .basic-info {
      padding: 32px;
    }
  }
</style>
