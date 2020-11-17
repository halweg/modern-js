let message;

/**
 * let return function class 作为保留字，不能作为变量名
 */
/**   变量赋值   **/
message = 'Hello';
let user = 'john', age = 25, message2 = 'Hello';
let user2 = 'jon2';
let age3  = 25;
let message3 = 'hello2';
const PI = 3.14;

/*************** 数据类型 **********************/
//8类型， 7种原始类型和1种引用类型

//1.number类型
let n = 1234;
n = 12.345

//2.bigInt类型，很少用
const bigInt = 1234567890123456789012345678901234567890n;

//3.string
let str = "hello";
let str2 = "Single quotes are ok too";
let phrase = `are you ok i say${str2}`;

//4.boolean类型
let is_used = false;
let not_used = true;

//5.null值
let age5 = null

//6.undefined值

let age2 = 100;
age2 = undefined;

//7.object类型

//8.symbol 类型


/**************** 类型转换   ******************/
//1.字符串转换
let value = true;

value = String(value)

console.log(typeof value)

//2.数字类型转换
let number1 = "6";
let number2 = "3";

console.log(typeof (number1 / number2))
console.log(Number(number1));

//3.布尔类型转换
// null, 0, 空串，undefined，NaN 将被转换为 false
//alert(Boolean(1))

//alert(Boolean(undefined))

let fistName = null;
let lastName = null;
let nickName = 'G';

