<script>
import url from './background-url'
import { on, off } from 'element-ui/src/utils/dom'
import { cursorInsideEl } from '@/utils/index'
export default {
  name: 'Cropper',
  props: {
    blob: [Object, String]
  },
  data () {
    return {
      scale: 1,
      left: 0,
      top: 0
    }
  },
  render (h) {
    return (
      <el-dialog
        on-open={this.initCropper}
        width="340px"
        title="请选择裁剪区域"
        {...{
          props: this.$attrs,
          on: this.$listeners
        }} >
        <div
          on-mousewheel={ this.scrollHandler }
          style={{
            background: `url(${url})`
          }}
          class="cropper-wrap">
          <img
            ref="img"
            style={this.style}
            on-load={this.initPosition}
            class="img"
            src={this.blob}
            alt="裁剪的图片" />
          <div
            ref="modal"
            on-mousedown={this.mousedownHandler}
            class="modal">
            <div ref="cropper-area" class="cropper-area"></div>
            <div class="modal-around">
              <div class="modal-around--top"></div>
              <div class="modal-around--right"></div>
              <div class="modal-around--bottom"></div>
              <div class="modal-around--left"></div>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button
            on-click={() => {
              this.$emit('close')
            }} >取 消</el-button>
          <el-button
            type="primary"
            on-click={this.getAvatar} >确 定</el-button>
        </span>
      </el-dialog>
    )
  },
  methods: {
    getAvatar () {
      const img = this.$refs.img
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = this.$refs['cropper-area']
      const { scale, left, top } = this
      this.$emit('get-avatar', img, {
        scale,
        left,
        top,
        cropperLeft: offsetTop,
        cropperTop: offsetLeft,
        cropperWidth: offsetWidth,
        cropperHeight: offsetHeight
      })
    },
    initCropper () {
      this.scale = 1
      this.left = 0
      this.top = 0
    },
    mousedownHandler (e) {
      const img = this.$refs.img
      if (!cursorInsideEl(e, img)) return
      let clientX = e.clientX
      let clientY = e.clientY
      const mouseMoveHandler = e => {
        e.preventDefault()
        const x = e.clientX - clientX
        const y = e.clientY - clientY
        this.left += x / this.scale
        this.top += y / this.scale
        clientX = e.clientX
        clientY = e.clientY
      }
      on(document, 'mousemove', mouseMoveHandler)
      on(document, 'mouseup', function mouseupHandler () {
        off(document, 'mousemove', mouseMoveHandler)
        off(document, 'mouseup', mouseupHandler)
      })
    },
    initPosition (e) {
      const { parentElement: parent, width, height } = e.target
      const { offsetWidth: parentWidth, offsetHeight: parentHeight } = parent
      if (parentWidth > width) {
        this.left = (parentWidth - width) / 2
      }
      if (parentHeight > height) {
        this.top = (parentHeight - height) / 2
      }
    },
    scrollHandler (e) {
      e.preventDefault()
      if (e.deltaY > 0) {
        this.scale *= 0.9
      } else {
        this.scale /= 0.9
      }
    }
  },
  computed: {
    style () {
      const { left, top, scale } = this
      return {
        transform: `scale(${scale}) translate(${left}px, ${top}px)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "./avatar";
  $cropper-width: 300px;
  $cropper-height: 300px;
  $snap-width:  ($cropper-width - $avatar-width) / 2;
  $snap-height:  ($cropper-height - $avatar-width) / 2;
  .cropper-wrap {
    width: $cropper-width;
    height: $cropper-height;
    overflow: hidden;
    position: relative;
    .img {
      cursor: all-scroll;
      max-width: 100%;
      max-height: 100%;
      transform-origin: 0 0;
    }
    .modal {
      @include absolute-covered;
      @include flex-center;
      .cropper-area {
        @include avatar-size;
        border: 1px solid #02d1a1;
      }
      .modal-around {
        @include absolute-covered;
        [class^=modal-around--] {
          position: absolute;
          background: #000;
          opacity: .5;
        }
        &--top {
          top: 0;
          left: 0;
          width: 100%;
          height: $snap-height;
        }
        &--bottom {
          bottom: 0;
          left: 0;
          width: 100%;
          height: $snap-height;
        }
        &--left {
          left: 0;
          top: $snap-height;
          width: $snap-width;
          height: $avatar-width;
        }
        &--right {
          right: 0;
          top: $snap-height;
          width: $snap-width;
          height: $avatar-width;
        }
      }
    }
  }
</style>
