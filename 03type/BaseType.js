/**
 * js 中的原始类型有7种
 * 1.string
 * 2.number
 * 3.null
 * 4.bigInt
 * 5.symbol
 * 6.undefined
 * 7.boolean
 *
 * js中只有一种引用类型：对象
 *
 *
 * **/

//1.对象包装器 4种类： String, Number, Boolean, Symbol

let str = "This is a String";

console.log(str.toUpperCase());

let str2 = "Hello";
str2.test = 5;
//console.log(str2.test);


//数字类型
let money = 7000000000;
//console.log(money)
let money2 = 7e9;
//console.log(money2);
const PI = 3.14e-1;
//console.log(PI);

//二进制和16进制
let bits = 0b11110111;
let Byte = 0o777;
//console.log(Byte.toString());
//小数转string的坑
//console.log(789..toString());
//console.log((7898).toString());

//数字的舍入
let numberType = 1.389;
/*console.log(Math.round(numberType));
console.log(Math.floor(numberType));
console.log(Math.ceil(numberType));*/

//乘除法
console.log((Math.floor(((numberType + 1) * 1000) ) / 1000 ));

console.log(Number ((numberType + 1).toFixed(3)));


//不精确计算
console.log(isNaN(NaN));
console.log(isNaN("str"))
console.log(isFinite(1))
console.log(isFinite("srr"))
console.log(isFinite(NaN))

//parseInt 和 parseFloat
console.log(+"s");

console.log(parseInt("100rmb"));
console.log(parseFloat("10.033rmb"));

console.log(Math.random());
console.log(Math.max(1.0 , 1, 1.00000000000004));
console.log(Math.pow(2, 3));
