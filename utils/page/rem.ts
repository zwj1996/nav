const baseSize = 16
export const setRem = () => {
  const scale = document.documentElement.clientWidth / 1920
  document.documentElement.style.fontSize = baseSize * scale + 'px'
}
