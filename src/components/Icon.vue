<script>
export default {
  name: 'Icon',
  functional: true,
  props: {
    href: String,
    left: Number,
    right: Number,
    width: {
      type: [String, Number],
      default: 100
    }
  },
  render (h, context) {
    const { props } = context
    let { href, width, left, right } = props
    if (Number(width)) {
      width += 'px'
    }
    if (left) {
      left += 'px'
    }
    if (right) {
      right += 'px'
    }
    const style = {
      width,
      marginRight: right,
      marginLeft: left,
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
