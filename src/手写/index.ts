// 定义一个类A
let ins: A = null;
class A {
    // 定义私有构造函数
    private constructor() { }

    // 定义一个静态方法getIns
    static getIns() {
        // 判断ins是否存在
        if (!ins) {
            // 若不存在，则实例化一个A对象
            ins = new A();
        }
        // 返回ins
        return ins;
    }
}

// 定义一个变量c
const c = A.getIns();
// 定义一个变量d
const d = A.getIns();
// 判断c和d是否相等
console.log(c === d);  // 输出 true

// 定义一个变量a
switch (a) { 
    // 当a等于1时
    case 1: { }
    // 默认情况
    default: { }
}

// 写一个冒泡排序算法
function bubbleSort(arr: number[]) {
    // 外层循环
    for (let i = 0; i < arr.length; i++) {
        // 内层循环
        for (let j = 0; j < arr.length - i - 1; j++) {
            // 若前一个数大于后一个数，则交换两个数的位置
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }   
        }
    }
}


