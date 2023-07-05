import { ResArray } from './form';

export type formRuleFn = () => ResArray
export type formFeedbackFn = (info: string) => void