export default function (target: string): number {
  if (/px$/.test(target)) {
    return Number(target.slice(0, -2))
  }
  return 0
}
