let single = "This is s string tks";

let single2 = `
this  is
a  st
bur  ${sum(1, 2)}

`;
function sum(a , b) {
    return a+b;
}
console.log(single2);

let single3 = 'hello \nword';

console.log("\u{20331}")

console.log(single3);

console.log("single3的长度是 ： "+ single3.length)

console.log(single3.charAt(0));
console.log(single3.charAt(single3.length - 1));
console.log(single3[1]);

console.log(single3.charAt(1000));
console.log(single3[1000])

for (let i in single3) {
    //console.log(single3[i]);
}

for (let i of single3) {
    //console.log(i);
}

console.log(single3.toUpperCase())
console.log(single3.toLowerCase())

console.log(single3.indexOf("o", 5))   //int 代表起始位置，可以省略
console.log(single3.includes("hello", 0))

console.log(single3.startsWith("hello")) //true
console.log(single3.endsWith("rd"))     //true


//获取子串 substring, substr, slice
let bigStr = "this is aksi skshfskdfsh";


console.log(bigStr.slice(0 , 2))  //从位置0截取到位置2， 但是不包括位置2
console.log(bigStr.slice(3))  //从位置3截取到末尾
console.log(bigStr.slice(-4, -1))  //从倒数位置为4的位置截取，直到倒数位置为1的位置结束
console.log(bigStr.substring(-4, -1))  //类似slice

console.log(bigStr.substr(0 , 2)) //从第0个截取，接着截2个
console.log(bigStr.substr(0 , bigStr.length))


//比较字符串
console.log("中华人民共和国".codePointAt(0)); //字符0位置的码点
let pCode = "中华人民共和国".codePointAt(0);
console.log(String.fromCodePoint(pCode))   //

console.log("囯".localeCompare("國")) // -1 囯的码点在 國之前



