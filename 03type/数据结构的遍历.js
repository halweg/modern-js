console.log("-------------数据结构的遍历---------------");
/***
 obj.keys()   //返回一个由obj 键 组成的数组

 obj.values() // 返回一个由obj value 组成的数组

 obj.entries() // 返回一个 包含该对象所有 [key, value] 键值对的数组

 ***/

let obj = { name : "jhon", age : 42, gender: "m" , job : "player"};
let keysArr = Object.keys(obj);
let valArr = Object.values(obj);
let enArr = Object.entries(obj);

console.log(keysArr);
console.log(valArr);
console.log(enArr);

console.log("-----------转换对象----------------");
//fromEntries 把一个组Array转化为一个 Object
console.log(enArr);
console.log(Object.fromEntries([
    ["name " , "jhonden" ],  [ "age", 1,"job", "plare"]
]));

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

//formEntries 从数组还原对象

//entries 从对象还原数组

prices = Object.fromEntries(
    Object.entries(prices).map( ([key, val]) => [key, val * 2] )
);
console.log(prices);



















