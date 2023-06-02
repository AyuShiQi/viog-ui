export type Target = [number, number]
export type PickTarget = {
  row: number,
  col: number,
  colLen: number,
  rowLen: number,
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number
}

export type ChangeTarget = {
  row: number,
  col: number
}

export type EditValue = ((row: number, col: number, value: any) => void)