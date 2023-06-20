import props from '../props/card'
import type { PropsType } from '../../../utils/component-type'

export type MessageCardProps = PropsType<typeof props>

export type MessageCardOption = {
    info: string,
    duration: number,
    time: number
}