/****        对象         ****/
//1.对象的创建

let user = new Object();

let user2 = {};   //常用这种方式，这种方式被称作字面量

let user3 = {
  name : "John",
  age : 18,
  job : "木匠",
  lastAct : "2010-01-05",
  "like birds" : true  //可以有多词属性，但是必须加引号
};

delete user3.lastAct //删除某个属性
//console.log(user3)

const user4 = {
    name : "这是一个常量user",
    des : "user4本身不可以修改，但是user4的name却是可以被修改的"
};

user4.name = "user4";

//console.log(user4)

//使用不确定的键名来访问对象的键值
//[]

let key = "name";

//console.log(user3[key])

//计算属性
//let fruit = prompt("which fruit do you like?", "apple");
let fruit = 'apple';
let bag = {
  [fruit] : 5
};

// /console.log(bag.apple)


//属性名简写
function makeUser(name, age) {
   let user = {
       name,
       age
   }

   return user
}
let hal = makeUser("halweg", 12);
console.log(hal);


//" in " 操作符
let userObj = {};
console.log(userObj.noSuchProperty  === undefined)

let userObj2 = {name: "史蒂文", age : 92 };

console.log("age" in userObj2);
let key2 = "job";
console.log(key2 in userObj2);

//for......in 循环
for (key in user4) {
    console.log(key + " -> " + user4[key])
}


// 对象遍历是有序的吗？
// 是一半有序的：可以被转换为 number 的键按照大小先后被遍历
// 其它则按照属性创建的顺序先后被遍历




