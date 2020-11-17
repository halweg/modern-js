
/*******  解构赋值就是 把数组或者对象的一部分拆出给别的变量    **********/
let arr1 = ["Yama", "Toleo"];

//把 arr1 拆给 firstName, 和 lastName两个变量
let [firstName, lastName] = arr1;
console.log(firstName)
console.log(lastName)

let [firstName2, lastName2] = "Lileo Kantor".split(' ');
console.log(firstName2);

//第二个空逗号的的位置，忽略被解构数组的第二个元素
let [author, , page] = ["ass Li", "java", 4]
console.log(author)
console.log(page)

//被解构的对象  可以是任何可迭代的对象
let [a, b, c] = "abc";
let [a1, b1, c1] = new Set([1, 2, 3])

//交换变量的技巧
let guest = "jane";
let admin = "Peter";
[guest, admin] = [admin, guest];
console.log(guest+admin)

//解构赋值同时遍历键和值
let arr = [["name", "qiao"], ["age", 13], ["sex", "big"]]

for (let [key, val] of arr) {
    console.log(`${key} : ${val}`)
}

//...就是剩下的全部元素
let [arrSon1,arrSon2, ...arrSonOther] = arr;
console.log(arrSon1)
console.log(arrSon2)
console.log(arrSonOther)

//解构赋值的默认值
let [firstNameq = "defaultFirstName", lastNameq = "last"] =
["fisrt"];

console.log(firstNameq);
console.log(lastNameq);


//对象解构
let options = {
    title : "菜单设置",
    width : 100,
    height : 200
}
let { height : t, width } = options;
console.log(t)
console.log(width)

//同数组一样，默认值
let {title2 = 100, w23= 200, height2 = 300} = options;
console.log(w23)

//剩余模式
let {title, ...rest} = options;
console.log(rest)

//使用已有变量去接 解构赋值结果的陷阱
let tit, hei, wid;

//{tit, hei, wid} = options; //error
//不把{}当作代码块
({tit, hei, wid} = options)
//解构赋值优化函数参数 ： 使用对象和解构默认值 来代替函数默认值
function saySomeThing({sayer = "默认的sayer",
                          age = 0,
                          name="admin"}) {
console.log(`this is ${sayer}say, age is ${age}, name is ${name}`)
}

let sayer = {sayer: "giao", name : "giao ge"};

saySomeThing(sayer)




















