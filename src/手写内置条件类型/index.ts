// 如果T可以赋值给U（即T继承于U） 返回 never 否则返回T 剔除T中可以继承U的类型
type myExclude<T, U> = T extends U ? never : T

// eg
type A1 = Exclude<'my' | 'me', 'my'>  // 'me'
type A2 = myExclude<'me' | 'me', string>  // 'me'

// 判断T是否继承于U
type Eq<T, U> = T extends U ? true : false;

// eg
type B1 = Eq<'my' | 'me', 'my'>  // 'boolean
type B2 = Eq<'me' | 'me', string>  // 'true'
type B3 = Eq<'my' | 'me', string>  // 'false'




