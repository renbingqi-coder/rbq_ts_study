// import "reflect-metadata";

// const formatMetadataKey = Symbol("format");
/**
 * 类装饰器 
 * 构造函数 参数是类本身 即类的构造函数
 * 可以返回一个类 直接覆盖 原始类  但不建议返回类 返回void时 直接运行函数
 * 可以多装饰器 从下往上执行
 */
function classDecorator<T extends new(...args:any[]) => object>(constructor: T) {
    // Object.seal(constructor);
    // Object.seal(constructor.prototype);
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }

}

/**
 * 方法装饰器
 * 实例属性
 * 1. 类的原型对象  target === 类.prototype
 * 2. 成员名
 * 3. 描述符
 * 静态方法装饰器 static prop
 * 1. 类的构造函数
 * 2. 成员名
 * 3. 描述符
 */
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor);
        const c = target[propertyKey];
        console.log('c====', c.name);
        descriptor.enumerable = value;
    };
}

function useless() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor);
        descriptor.value = function (){
            console.log('该方法已过期')
        };
    };
}

/**
 * 属性装饰器
 * 实例属性
 * 1. 类的原型对象  target === 类.prototype
 * 2. 成员名
 * 静态属性装饰器 static prop
 * 1. 类的构造函数
 * 2. 成员名
 */
// function format(formatString: string) {
//     return Reflect.metadata(formatMetadataKey, formatString);
// }

class MyClass { 
    property = "property";
    hello: string;
    constructor(m: string){
        this.hello = m;
    }
    @useless()
    @enumerable(true)
    getHello(): string{
        return this.hello;
    }
}

const d: MyClass = new MyClass('world')
console.log(d, d.getHello());


/**                     练习             */
// 类装饰器 属性修饰 日志打印

function classPrint(value: string){
    return function<T extends new (...args: any[])=>{}>(target: T){
        // 保存到原型上
        target.prototype.$classDescription = value;
    }
}

function propPrint(value: string){
    return function(target: any, key: string){
        // 保存到原型上
        if(!target.$propDescription){
            target.$propDescription = [];
        }
        target.$propDescription.push({
            propName: key,
            description: value,
        });
    }
}

function printObj(o: any){
    console.log(o.$classDescription)
    console.log(o.$propDescription)
}
@classPrint('用户')
class User {
    @propPrint('用户名')
    uid: number
    @propPrint('密码')
    pass: number
}

@classPrint('用户')
class User1 {
    @propPrint('用户名1')
    uid: number
    @propPrint('密码1')
    pass: number
}
const u1 = new User();
const u2 = new User1();


printObj(u1)
printObj(u2)

