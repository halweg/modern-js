console.log("1.----------Symbol.iterator----------------");

let range = {
    from : 1,
    to : 6,

}
range[Symbol.iterator] = function() { return  {

    current : this.from,

    last : this.to,

    next() {
        if (this.current <= this.last) {
            return { done : false, value: this.current++ }
        } else {
            return {done: true}
        }
    }
} }

for (let item of range) {
    console.log(item);
}

console.log("-----------把 Symbol.iterator 写入range自身-----------");

let range2 = {
    from : 1,
    to : 5,

    /*[Symbol.iterator] :  function() {
        简写为 [Symbol.iterator]()
    }*/

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done : false, value: this.current++ }
        } else {
            return { done : true }
        }
    }

}

for (let item of range2) {
    console.log(item)
}
//总结 ：迭代启动时 首先调用 Symbol.iterator，并且暂存返回值，此后 通过 next() 不断的获取下一个元素，直到返回 { done : true }
//无穷迭代器， to : Infinity, 这种迭代永远 { done : false }，但是可以用break停掉它

console.log("-------------字符串的迭代-------------------")
/*for (let str of "ABCDEFG😂") {
    console.log(str)
}*/



console.log(" 显示调用迭代器：")
let str = "ABCDEFGHIJKHL";

let iterator = str[Symbol.iterator]();

while (true) {
    let ret = iterator.next();
    if (ret.done == true) {
        break;
    }
    //console.log(ret.value);
}


console.log("--------------可迭代和类数组------------------");
//Iterable: 可迭代，就是 实现了 Symbol.iterator 的对象

//类数组对象： 有index， 又有 length 的对象

let arrayLike = { // 有索引和 length 属性 => 类数组对象
    0: "Hello",
    1: "World",
    length: 2
};

/*for (let item of arrayLike) {
    //这里会报错， 因为arrayLike对象不是数组，且没有实现 Symbol.iterator，
    //那怎么办？
    console.log(item)
}*/

//使用 Array.from
let arr = Array.from(arrayLike); // (*)

arr.push("!")

for (let item of arr) {
    console.log(item)
}



























