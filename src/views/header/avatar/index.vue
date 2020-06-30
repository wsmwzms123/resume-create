<template>
  <div class="avatar">
    <Icon
      v-if="!hasSetAvatar"
      href="#icon-robot"
      width="88px"/>
    <canvas id="canvas" :width="CANVAS_WIDTH" :height="CANVAS_HEIGHT"></canvas>
    <label class="avatar-modal" >
      <input
        accept="image/*"
        ref="fileInput"
        type="file"
        id="avatar-upload"
        @click="$refs.fileInput.value = null"
        @input="handleInput">
      <Icon href="#icon-camera" width="32px"/>
    </label>
    <cropper
      :append-to-body="true"
      @get-avatar="getAvatar"
      @close="handleDialogClose"
      :blob="imgBlob"
      :visible.sync="cropperVisible">
    </cropper>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import Cropper from './cropper'
const CANVAS_WIDTH = 88
const CANVAS_HEIGHT = 88
export default {
  name: 'Avatar',
  components: {
    Icon,
    Cropper
  },
  data () {
    return {
      hasSetAvatar: false,
      cropperVisible: false,
      imgBlob: '',
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    }
  },
  methods: {
    getAvatar (img, {
      scale,
      left,
      top,
      cropperLeft,
      cropperTop,
      cropperWidth,
      cropperHeight
    }) {
      const ctx = document.querySelector('#canvas').getContext('2d')
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      const { naturalWidth, naturalHeight, width, height } = img
      const ratioX = naturalWidth / (scale * width)
      const ratioY = naturalHeight / (scale * height)
      const originLeft = (cropperLeft - left * scale) * ratioX
      const originTop = (cropperTop - top * scale) * ratioY
      const coveredWidth = cropperWidth * ratioX
      const coveredHeight = cropperHeight * ratioY
      ctx.drawImage(img, originLeft, originTop, coveredWidth, coveredHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      this.hasSetAvatar = true
    },
    handleDialogClose (visible = false) {
      this.cropperVisible = visible
    },
    handleInput (e) {
      this.imgBlob = ''
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
      transition: .5s;
      height: 100%;
      width: 100%;
      background: #3a3838cc;
      position: absolute;
      top: 0;
      opacity: 0;
      #avatar-upload {
        display: none;
      }
    }
    #canvas {
      @include covered;
    }
    &:hover .avatar-modal {
      opacity: 1;
    }
  }
</style>
