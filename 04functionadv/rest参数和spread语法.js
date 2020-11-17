// rest参数类似不定参数
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8));

function sum2(a1,a2, ...args) {
    console.log(a1)
    console.log(a2)
    console.log(args[1])
}

function testArguments() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    //arguments 不是真数组，不可使用数组方法
}
//testArguments(1,2)

console.log("--------------Spread语法-------------")

let num = [1, 3, 6, 8];
let num2 = [4, 99, 0];
console.log(Math.max(num));  // 返回NaN,

//使用spread “展开” 可迭代对象作为 Math.max()的参数
console.log(Math.max(...num))
console.log(Math.max(...num, 1, 9, ...num2))

//使用Spread来合并数组
console.log([1, ...num2,  2,3, ...num ])

let str = "Hello World!";
console.log([...str]);

//使用 Spread 来 获取数组和对象的副本
let arr = [1,2,3,4,5,6];
let arrCopy = [...arr];

console.log(JSON.stringify(arr) == JSON.stringify(arrCopy));
console.log(arr == arrCopy);
// arr 的改变不会改变 arrCopy


let obj = {a:1, b:2, c:3};

let objCopy = {...obj};

obj.a = 10;

console.log(objCopy.a)

















