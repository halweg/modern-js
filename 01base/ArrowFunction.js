/*********  箭头函数 ************/

let sum03 = (a, b) => a +b;
let ret03 = sum03(1, 9);
console.log(ret03)


let double = a => a*a;  //只有一个参数a, 且代码块只有一行
console.log(double(100))


let double02 = a => {
    let b = 0;
    b = a * a;
    return b;
}

console.log(double02(10))

let sum02 = (a, b) => {    //两个参数a,b的情况
    let c = a + b;
    return c;
}

console.log(sum02(1, 4));

let ask03 = (question, okShow, noShow) => {
    if (confirm(question)) {
        okShow();
        return;
    }
    noShow();
}

let showYes = () => alert("你点了确定");  //没有参数的情况

let showNo = () => alert("你点了取消");

//ask03("判断你点的是什么", showYes, showNo)

//利用箭头函数模仿一个三目运算
let age = 0;
let mutiplex = (age < 18) ?
    ()=>  console.log("你的age现在是小于18de ")  :
    () =>  console.log("你的age现在是大于等于18de ");

mutiplex();