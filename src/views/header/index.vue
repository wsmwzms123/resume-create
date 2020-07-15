<template>
  <header class="profile">
    <div class="basic-info">
      <PersonalInfo />
      <Avatar />
    </div>
    <el-divider></el-divider>
  </header>
</template>

<script>
import Avatar from './avatar'
import PersonalInfo from './personal-info'
export default {
  name: 'Header',
  components: {
    Avatar,
    PersonalInfo
  }
}
</script>

<style lang="scss" scoped>
  header.profile {
    padding-bottom: 15px;
    .el-divider {
      background-color: #f6f6f8;
    }
    .basic-info {
      display: flex;
    }
  }
</style>
