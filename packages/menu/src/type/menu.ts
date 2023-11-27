import type { Ref } from 'vue'

export type MenuId = () => number
export type ToPick = (newId: number, value: any, to?: string) => void
export type NowPick = Ref<number>
export type MenuRouter = boolean

export type MenuRouterLinker = ((id: number, to: string) => void) | undefined