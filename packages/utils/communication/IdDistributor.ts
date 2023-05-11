export default function idGetter () {
  let id = 1
  return () => id++
}
