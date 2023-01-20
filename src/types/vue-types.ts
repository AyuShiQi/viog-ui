export interface VueContext {
    attrs: object,
    emit: Function,
    expose: Function,
    slots: object
} 

export type DOMType = {
    addEventListenner: (event: string,rb: Function) => void
}