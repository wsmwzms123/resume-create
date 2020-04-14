<script>
import url from './background-url'
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
          class="cropper-area">
          <img
            style={this.style}
            on-load={this.imgLoad}
            class="img"
            src={this.blob}
            alt="裁剪的图片" />
        </div>
      </el-dialog>
    )
  },
  methods: {
    imgLoad (e) {
      const { parentElement: parent, width, height } = e.target
      const { offsetWidth: parentWidth, offsetHeight: parentHeight } = parent
      console.log(width, parentWidth, height, parentHeight)
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
  .cropper-area {
    width: 400px;
    height: 400px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    .img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
