<template>
  <div class="avatar">
    <Icon
      v-if="!src"
      href="#icon-robot"
      width="88px"/>
    <img
      v-else
      :src="src"
      alt="我的头像">
    <label class="avatar-modal" for="avatar-upload">
      <input type="file" name="avatar-upload" id="avatar-upload">
      <Icon href="#icon-camera" width="32px"/>
    </label>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'Avatar',
  components: {
    Icon
  },
  data () {
    return {
      src: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .avatar {
    position: relative;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    width: 88px;
    height: 88px;
    .avatar-modal {
      display: none;
      height: 100%;
      width: 100%;
      background: #3a3838cc;
      position: absolute;
      top: 0;
      #avatar-upload {
        display: none;
      }
    }
    &:hover .avatar-modal {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
</style>
