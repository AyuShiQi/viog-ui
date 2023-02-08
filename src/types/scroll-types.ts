export interface ScrollType {
    scrollTo: (x: number, y: number) => void
    finish: boolean
}

export interface VirtualScrollType {
    scrollTo: (x: number, y: number) => void
}

export interface ScrollProps {
    width: string,
    height: string,
    color: string,
    hidden: boolean,
    lazy: Function,
    smooth: boolean,
    wait: string,
    waitText: string,
    finish: boolean,
    maxHeight: string
}

export interface VirtualScrollPlusProps {
    color: string,
    hidden: boolean,
    totalHeight: number,
    clientHeight: number
}

export interface VirtualScrollProps {
    width: string,
    height: number
    color: string,
    hidden: boolean,
    datas: unknown[] | undefined,
    itemHeight: number
}