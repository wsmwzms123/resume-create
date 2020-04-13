<script>
export default {
  name: 'Cropper',
  render (h) {
    return (
      <el-dialog
        title="请选择裁剪区域"
        {...{
          props: this.$attrs,
          on: this.$listeners
        }}
      >
      </el-dialog>
    )
  }
}
</script>

<style lang="scss" scoped>

</style>
