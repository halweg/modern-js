console.log("----------map and set----------")

//Map : 类似 Object，Map的键可以是 任意的类型
console.log("1.map的创建和值获取：")

let map1 = new Map();

map1.set(1, "键值为 int 1 的value");   //虽然可以使用 map1[1] 的方式，但是少用，因为map[1]把 它当作对象，暗含了obj的一些限制
map1.set("1", "键值为 string 1 的value");
map1.set(true, "键值为 bool true的value");

console.log(map1.get(1));
console.log(map1.get("1"));
console.log(map1.get(true));

//map的对象键
let john = { name: "John" };
let visitCountMap = new Map();
visitCountMap.set(john, {desc : "对象键的值"});
console.log(visitCountMap.get(john))

//链式set
visitCountMap.set('name', "John").set(1, "john").set(true, "value of true in john map")
console.log(visitCountMap.get(true))
console.log("map 的 size:" + visitCountMap.size)
console.log("map 的 含有 true ?:" + visitCountMap.has(true))
console.log("map 中删除 true " + visitCountMap.delete(true));
console.log(visitCountMap)
console.log("清空 map : " + visitCountMap.clear());

console.log("2.map的迭代：");

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

console.log(recipeMap.keys())
console.log(recipeMap.values())
console.log(recipeMap.entries())

recipeMap.forEach((value, key, map) => {
    console.log(`${key} : ${value}`)
});

for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
    console.log(entry); // cucumber,500 (and so on)
}

let createMap = new Map([
    [true, "this is true value"],
    ['1', "this is 1 value"],
    [2, "this is a value"]
]);

console.log(createMap.get(true));

//从一个已经存在的map中还原对象
console.log(Object.fromEntries(createMap));

//从obj创建 map
console.log(new Map( Object.entries({name : "yz", age : 9})) );

console.log("-------------------集合set------------------");

let set = new Set();

let jhon = {name : "Jhon"};
let steven = {name : "steven" };

set.add(john);
set.add(steven)
set.add(steven)

console.log(set)


//set的迭代

for (let item of set) {
    console.log(item)
}
//set 的遍历
console.log("----set的遍历----")
set.forEach((value, valueAgain, set) => {
    console.log(value)
    console.log(valueAgain)
    console.log(set)
})
