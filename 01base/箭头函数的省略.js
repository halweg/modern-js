//单行箭头函数，小括号和 return 都可以省略
let func1 = item => item + 1;

//多行箭头函数，
let func2 = item => {
    if (item % 2 == 0) {
        return '偶数'
    }
    return '奇数'
}
console.log(func1(1));

console.log(func2(2));

//单行多参数箭头函数
let func3 = (item, items) => item + items;

console.log(func3(3, 7));

//多行，多参数箭头函数
let func4 = (item, item2) => {
    if (item > item2) {
        return item;
    }

    return item2
}
console.log(func4(33, 99))

