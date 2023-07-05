/**
 * form name,form value, res, trunc
 */
export type ResArray = [string, any, boolean, boolean]

export type CollectFormSet = (name: string, fn: () => ResArray, fn2: (info: string) => void) => void