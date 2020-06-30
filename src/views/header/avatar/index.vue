<template>
  <div class="avatar">
    <Icon
      v-if="!src"
      href="#icon-robot"
      width="88px"/>
    <canvas id="canvas" v-else></canvas>
    <label class="avatar-modal" @input="handleInput">
      <input type="file"  id="avatar-upload">
      <Icon href="#icon-camera" width="32px"/>
    </label>
    <cropper
      @close="handleDialogClose"
      :blob="imgBlob"
      :visible.sync="cropperVisible">
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
    handleDialogClose (visible = false) {
      this.cropperVisible = visible
    },
    handleInput (e) {
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
  @import "~@/styles/mixin.scss";
  @import "./avatar";
  .avatar {
    position: relative;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    @include avatar-size;
    cursor: pointer;
    .avatar-modal {
      @include flex-center;
      transition: .3s;
      height: 0;
      width: 100%;
      background: #3a3838cc;
      position: absolute;
      top: 0;
      opacity: .5;
      #avatar-upload {
        display: none;
      }
    }
    #canvas {
      @include covered;
    }
    &:hover .avatar-modal {
      height: 100%;
      opacity: 1;
    }
  }
</style>
