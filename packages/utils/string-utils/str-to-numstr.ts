export default function (target: string): string {
  const numStrList = []
  for (const s of target) {
    if (!Number.isNaN(parseInt(s))) numStrList.push(s)
  }
  return numStrList.join('')
}
