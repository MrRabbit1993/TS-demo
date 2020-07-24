const toString = Object.prototype.toString

// 是否是日期类型
export const isDate: (val: any) => val is Date = (val: any): val is Date => {
    return toString.call(val) === '[object Date]'
}

// 是否是对象

export const isObject: (val: any) => val is Object = (val: any): val is Object => {
    return val !== null && typeof val === 'object'
}