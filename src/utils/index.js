export const cursorInsideEl = (e = event, el) => {
  const { clientX, clientY } = e
  if (!el || !clientX || !clientY) return false
  if (typeof el === 'string') return document.querySelector(el)
  const { top, bottom, left, right } = el.getBoundingClientRect()
  return clientX >= left && clientX <= right && clientY >= top && clientY <= bottom
}
