export interface VueContext {
    attrs: object,
    emit: Function,
    expose: Function,
    slots: any
} 

export type DOMType = {
  addEventListener: (event: string,rb: Function) => void
  removeEventListener: (event: string) => void
  scrollTo: (x: number, y: number) => void
}

export interface InputDOM {
  focus: Function,
  value: string,
  blur: Function
}

export type Event = {
  isTrusted: string,
  target: any
}

export interface InputEvent {
  isTrusted: string,
  target: any,
  data: string,
  inputType: string,
  isComposing: boolean
}

export interface KeyEvent {
    isTrusted: string,
    target: any,
    key: string,
    code: string
}

export interface VueInstace {
    ctx: any
}