<script>
export default {
  name: 'Icon',
  functional: true,
  props: {
    href: String,
    width: {
      type: [String, Number],
      default: 100
    }
  },
  render (h, context) {
    const { props } = context
    let { href, width } = props
    if (Number(width)) {
      width += '%'
    }

    const style = {
      width,
      height: width
    }
    return h('svg', {
      staticClass: 'icon',
      style,
      attrs: {
        'aria-hidden': true
      }
    }, [
      h('use', {
        attrs: {
          'xlink:href': href
        }
      })
    ])
  }
}
</script>
