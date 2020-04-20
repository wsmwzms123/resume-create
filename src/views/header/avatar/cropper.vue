<script>
import url from './background-url'
import { on, off } from 'element-ui/src/utils/dom'
export default {
  name: 'Cropper',
  props: {
    blob: [Object, String]
  },
  data () {
    return {
      scale: 1,
      left: 0,
      top: 0,
      canDrag: false
    }
  },
  render (h) {
    return (
      <el-dialog
        width="440px"
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
            style={this.style}
            on-load={this.initPosition}
            on-mousedown={this.mousedownHandler}
            class="img"
            src={this.blob}
            alt="裁剪的图片" />
          <div class="modal">
            <div class="cropper-area"></div>
          </div>
        </div>
      </el-dialog>
    )
  },
  methods: {
    mousedownHandler (e) {
      this.canDrag = true
      let clientX = e.clientX
      let clientY = e.clientY
      const mouseMoveHandler = e => {
        e.preventDefault()
        const x = e.clientX - clientX
        const y = e.clientY - clientY
        this.left += x
        this.top += y
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
  .cropper-wrap {
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: relative;
    .img {
      cursor: all-scroll;
      max-width: 100%;
      max-height: 100%;
    }
    .modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .cropper-area {
      }
    }
  }
</style>
