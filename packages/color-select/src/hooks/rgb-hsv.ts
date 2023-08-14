/**
 * hsv转rgb
 * @param h 色相 
 * @param s 饱和度
 * @param v 明度
 * @param a 透明度
 * @returns rgba数组
 */
export function HSVtoRGB(h: number, s: number, v: number, a = 1) {
  let i, f, p1, p2, p3
  let r = 0, g = 0, b = 0
  if (s < 0) s = 0
  if (s > 1) s = 1
  if (v < 0) v = 0
  if (v > 1) v = 1
  h %= 360
  if (h < 0) h += 360
  h /= 60
  i = Math.floor(h)
  f = h - i
  p1 = v * (1 - s)
  p2 = v * (1 - s * f)
  p3 = v * (1 - s * (1 - f))
  switch(i) {
    case 0: r = v;  g = p3; b = p1; break
    case 1: r = p2; g = v;  b = p1; break
    case 2: r = p1; g = v;  b = p3; break
    case 3: r = p1; g = p2; b = v;  break
    case 4: r = p3; g = p1; b = v;  break
    case 5: r = v;  g = p1; b = p2; break
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a]
}

export function RGBtoHSV (r: number, g: number, b: number, a = 1) {
  let rr, gg, bb, s
  let h = 0
  let v = Math.max(r, g, b),
  diff = v - Math.min(r, g, b),
  diffc = function(c: number){
    return (v - c) / 6 / diff + 1 / 2;
  }

  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;  rr = diffc(r); gg = diffc(g); bb = diffc(b);
    if (r === v) {
      h = bb - gg;
    } else if (g === v) {
      h = (1 / 3) + rr - bb;
    } else if (b === v) {
      h = (2 / 3) + gg - rr;
    }

    if (h < 0) {
      h += 1;
    }else if (h > 1) {
      h -= 1;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  }
}
