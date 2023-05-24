export default function () {
  let defaultEvent = true

  function preventDefault() {
    defaultEvent = false
  }

  return {
    defaultEvent,
    preventDefault
  }
}