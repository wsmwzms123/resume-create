export default {
  name: 'Icon',
  functional: true,
  props: {
    href: String
  },
  render (h, { props }) {
    return h('svg', {
      staticClass: 'icon',
      attrs: {
        'aria-hidden': true
      }
    }, [
      h('use', {
        attrs: {
          'xlink:href': props.href
        }
      })
    ])
  }
}
