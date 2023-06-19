import type { Ref } from 'vue'

export type MenuId = () => number
export type ToPick = (id: number, to?: string) => void
export type NowPick = Ref<number>
export type MenuRouter = boolean

export type MenuRouterLinker = ((id: number, to: string) => void) | undefined