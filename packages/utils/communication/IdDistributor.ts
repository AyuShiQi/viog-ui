export default function idGetter () {
  let id = 0
  return () => id++
}
