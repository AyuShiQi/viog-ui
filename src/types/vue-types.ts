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

export type Event = {
  isTrusted: string,
  target: DOMType
}

export interface VueInstace {
    ctx: any
}