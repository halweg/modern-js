let arr = [];

arr[0] = 'Apple';
arr[1] = 'Bog';
arr[2] = 'Pig';

let arr2 = ['pig', 'dog', {name:"bob", age:19}];

console.log(arr);
console.log(arr2);
console.log("数组的长度是："+arr.length)

arr.push({name:"Bob", age : 19})
let fistNode = arr.shift();
console.log(fistNode)
arr.pop();
arr.unshift("unshiftApple")
console.log(arr)

//数组的遍历,
for (let i in arr) {   //不要使用这种方法， 会遍历出隐藏对象
    //console.log(arr[i])
}

//推荐使用这种
for(let i =0; i < arr.length; i++) {
    //console.log(arr[i]);
}

//或者这种
for (let i of arr) {
    //console.log(i)
}

//数组方法之 slip
let arrAy = ['java', 'php', 'golang', 'c#', 'c++'];

arrAy.splice(0,1);  //从第0个开始，干掉1个
arrAy.splice(0,1, "php forever");  //从第0个开始，干掉1个,并且用 php forever 代替
console.log(arrAy)

let arrBy = arrAy.slice(0);  //根据slice切片数组，赋值到一个新的内存里
console.log(arrBy)

let bigArray = arrBy.concat(arr2);

console.log(bigArray)


let arrCy = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true, //如果对象有这个属性，会被concat当作数组来与另外一个数组连接，
    // 否则，这个对象整体会和另外一个数组连接

    length: 3
};
console.log(arrCy.concat(arrayLike)); // 1,2,something,else


//foreach
arrAy.forEach(function (item,index,arr) {
    console.log("item: "+ item);
    console.log("index: "+ index);
    console.log("arr: "+ arr);
});

console.log("[info]------------------------");

//数组中搜索
console.log(arr)
//从0号索引开始搜索 unshiftApple并返回索引，如果不存在就返回-1
console.log(arr.indexOf("unshiftApple", 0));

//
console.log(arr.lastIndexOf("Pig", 2));  //从2号索引开始反方向查找Pig的索引

console.log(arr.includes("Pig"));     //返回boolean, 并且可以处理 NaN

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let Sec = users.find((item, index, arr) => item.id == 1 );

console.log("这里是find（）函数的区间")
console.log(Sec);

let Sec2 = users.filter(item => item.id <= 2);
console.log(Sec2);


//数组转换
let lengths = ["Bilbo", "Gandalf", "Nazgul"];
//map是值拷贝，不会改变原来的数组
let newLengths = lengths.map( v => v.toLowerCase() );
console.log(newLengths);


let numbers = [7, 18, 9, 4];
numbers.sort();
console.log(numbers) //[18, 4, 7, 9], 为什么没有排对？因为 sort 是把元素当作字符串来比较的


//split 和 join
let names_ = 'Bilbo, Gandalf, Nazgul'

let arr_ = names_.split(',')

console.log(arr_)

//空参数 split 会拆分为字母数组
let str_ = "sdfsdfasdf"
str_ =  str_.split('')
console.log(str_)
console.log(str_.join(''))

console.log("reduce is starting...........")
//reduce
let value_ = numbers.reduce(function(a, item, index, arr) {
    console.log(a)
    console.log(item)

    return a + item
});


let arrs2 = [1, 1, 1, 2, 2, 2, 2];

let arrsCount = arrs2.reduce( (sum, res)=> res + sum);

console.log(arrsCount)

console.log("arrs2是不是数组：", Array.isArray(arrs2));

let childs = [

    {
        name : "Al",
        age : 1
    },
    {
        name : "Bl",
        age : 2
    },
    {
        name : "Cl",
        age : 3
    }

];


//找出一个
let ret = childs.find(
    (item) => item.age < 3
);

console.log(ret)

//找出若干
let ret2 = childs.filter((item) => item.age <= 3)

console.log(ret2)

//相当于php中的array_map
childs.map(item => item.age += 1);

console.log(childs)

//sort() 排序函数的坑
let beforeSortArray = [
    1, 2, 15
];

//sort函数会把所有数组元素转换为字符串，再来比较
console.log(beforeSortArray.sort()) //输出1， 15， 2

//使用自定义函数来传入 sort
let afterSortArray =  beforeSortArray.sort(function(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})

//compare函数只要返回 0 就相当于 等于，返回 > 0 的数，就表示大于，返回 < 0的 数，就表示小于
let compare2item = (a, b) => a - b;

console.log(beforeSortArray.sort(compare2item))
console.log(beforeSortArray.sort((a, b) => a - b))

// 字符串排序的坑
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log('----------字符串排序的正确姿势-------------');
console.log( "a".localeCompare("b"));
console.log(countries.sort((a, b) => a.localeCompare(b) ))

//迭代函数的第二个参数
console.log("------------------迭代函数的第二个参数--------------------")
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};
let userss = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];
//普通一般方法
console.log(userss.filter(user =>  army.canJoin(user)));

//迭代函数第二参数的方法
console.log(userss.filter(army.canJoin, army));


















