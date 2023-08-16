/**
 * hsv转rgb
 * @param h 色相
 * @param s 饱和度
 * @param v 明度
 * @param a 透明度
 * @returns rgba数组
 */
export function HSVtoRGB (h: number, s: number, v: number, a = 1) {
  s /= 100
  v /= 100
  let r = 0
  let g = 0
  let b = 0
  if (s < 0) s = 0
  else if (s > 1) s = 1
  if (v < 0) v = 0
  else if (v > 1) v = 1
  h %= 360
  if (h < 0) h += 360
  h /= 60
  const i = Math.floor(h)
  const f = h - i
  const p1 = v * (1 - s)
  const p2 = v * (1 - s * f)
  const p3 = v * (1 - s * (1 - f))
  switch (i) {
    case 0:
      r = v
      g = p3
      b = p1
      break
    case 1:
      r = p2
      g = v
      b = p1
      break
    case 2:
      r = p1
      g = v
      b = p3
      break
    case 3:
      r = p1
      g = p2
      b = v
      break
    case 4:
      r = p3
      g = p1
      b = v
      break
    case 5:
      r = v
      g = p1
      b = p2
      break
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a]
}

export function RGBtoHSV (r: number, g: number, b: number, a = 1) {
  r /= 255
  g /= 255
  b /= 255
  // console.log(r, g, b)
  let rr = 0
  let gg = 0
  let bb = 0
  let s = 0
  let h = 0
  const v = Math.max(r, g, b)
  const diff = v - Math.min(r, g, b)
  const diffc = function (c: number) {
    return (v - c) / 6 / diff + 0.5
  }

  if (diff === 0) {
    h = s = 0
  } else {
    s = diff / v
    rr = diffc(r)
    gg = diffc(g)
    bb = diffc(b)
    if (r === v) {
      h = bb - gg
    } else if (g === v) {
      h = (1 / 3) + rr - bb
    } else if (b === v) {
      h = (2 / 3) + gg - rr
    }

    if (h < 0) {
      h += 1
    } else if (h > 1) {
      h -= 1
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  }
}

export function HextoRGB (hex: string): number[] {
  hex = hex.padEnd(8, 'f')
  const rgb = [0, 0, 0, 1]
  for (let i = 0; i < 4 && hex.length >= 2; i++) {
    const now = parseInt(hex.slice(0, 2), 16)
    hex = hex.slice(2)
    rgb[i] = now
    if (rgb[i] > 255) rgb[i] = 255
  }
  rgb[3] = Number((rgb[3] / 255).toFixed(2))
  return rgb
}

export function RGBtoHex (rgb: number[]): string {
  let strHex = ''
  for (let i = 0; i < 3; i++) {
    let hex = rgb[i].toString(16)
    if (hex === '0') {
      hex += hex
    }
    strHex += hex
  }

  if (rgb[3]) {
    let hex = Math.round(rgb[3] * 255).toString(16)
    if (hex === '0') {
      hex += hex
    }
    strHex += hex
  }

  return strHex
}
