export interface scrollType {
    scrollTo: (x: number, y: number) => void
    finish: boolean
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