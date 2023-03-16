export interface ViScrollType {
    scrollTo: (x: number, y: number) => void
    finish: boolean
}

export interface ViVirtualScrollType {
    scrollTo: (x: number, y: number) => void
}

export interface ScrollProps {
    color: string,
    hidden: boolean,
    lazy: Function,
    smooth: boolean,
    wait: string,
    waitText: string,
    finish: boolean
}

export interface VirtualScrollPlusProps {
    color: string,
    hidden: boolean,
    totalHeight: number,
    clientHeight: number
}

export interface VirtualScrollProps {
    color: string,
    hidden: boolean,
    datas: unknown[] | undefined
}