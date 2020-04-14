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
    <label class="avatar-modal" @change="changeHandler">
      <input type="file"  id="avatar-upload">
      <Icon href="#icon-camera" width="32px"/>
    </label>
    <cropper
      :blob="imgBlob"
      :visible.sync="cropperVisible"
    >

    </cropper>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Cropper from './cropper'
export default {
  name: 'Avatar',
  components: {
    Icon,
    Cropper
  },
  data () {
    return {
      src: '',
      cropperVisible: false,
      imgBlob: ''
    }
  },
  methods: {
    changeHandler (e) {
      let file = e.target.files
      if (!file || !file.length) return
      file = Array.from(file).pop()
      if (!this.isStaticPic(file)) {
        return this.$message.error('[FBI WARNNING]: 上传头像图片只能是 jp(e)g|png|webp 格式!')
      }
      this.imgBlob = URL.createObjectURL(file)
      this.cropperVisible = true
    },
    isStaticPic (file) {
      if (!file || !file.type) return false
      const LIMIT_TYPES = ['png', 'jpg', 'jpeg', 'webp']
      return LIMIT_TYPES.some(type => file.type.includes(type))
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
