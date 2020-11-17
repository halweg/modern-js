console.log("-------------弱集合和弱映射------------------");

let john = {name : "Jhon"};

//john = null;  //john 不可达，会被回收


let arr = [ john ];
jhon = null;   //在数组里的 obj 即使被 null 也不会被垃圾回收
//可以通过 arr[0] = null 来回收

//试想用 obj 做 map 键的情况
let obj2 = { name : "jhon" };
let map = new Map();

map.set(obj2, 1);
map.set(obj2, 1);
john = null;
console.log(map);
console.log(map.keys());   //可以看到 john 并没有被回收

//那怎么办？  使用弱映射和弱集合
console.log("------Weakmap的键必须是对象--------")
//weakmap不可以被迭代
let weakMap = new WeakMap();
let keyObj = {name : "金"};
//weakMap.set("test", "This is test value");  Error 这里会报错，因为set的键只可以是对象
weakMap.set({name : "郭富城"}, "valule of the 郭富城");
weakMap.set( keyObj,  "valule of the keyObj");
console.log(weakMap.get(keyObj))
weakMap.delete(keyObj)
console.log(weakMap);
keyObj = null;
keyObj = null;
keyObj = null;
keyObj = null;

console.log("-------弱set---------");

let weakSet = new WeakSet();
let weakObj = {}
weakSet.add( {age : 1}, "this is value of age=1")
weakSet.add( weakObj, "this is value of age=1")
console.log(weakSet)
console.log(weakSet.has(weakObj))
weakSet.delete(weakObj)
console.log(weakSet.has(weakObj))

























