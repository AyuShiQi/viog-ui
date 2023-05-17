export type PropsType<T> = {
    [k in keyof T]: T[k] extends { type: any } ? (
        T[k] extends { default: any } ? 
        T[k]['type'] extends Array<any> ? (
            includeString<T[k]['type'][0]>
        ) : normalType<T[k]['type']>
        : T[k]['type'] extends Array<any> ? (
            includeString<T[k]['type'][0]>
        ) : normalType<T[k]['type']> | undefined
    ) : T[k] extends { default: any } ? any
    : normalType<T[k]> | undefined
}

type normalType<T> = T extends StringConstructor ? string :
T extends BooleanConstructor ? boolean :
T extends NumberConstructor ? number :
T extends FunctionConstructor ? Function :
T extends ObjectConstructor ? object : 
T extends ArrayConstructor ? any[] : any

type includeString<T> = StringConstructor extends T ? string | includeBoolean<T> : includeBoolean<T>
type includeBoolean<T> = BooleanConstructor extends T ? boolean | includeNumber<T> : includeNumber<T>
type includeNumber<T> = NumberConstructor extends T ? number | includeFunction<T> : includeFunction<T>
type includeFunction<T> = FunctionConstructor extends T ? Function | includeObject<T> : includeObject<T>
type includeObject<T> = ObjectConstructor extends T ? object | includeArray<T> : includeArray<T>
type includeArray<T> = ArrayConstructor extends T ? any[] : never