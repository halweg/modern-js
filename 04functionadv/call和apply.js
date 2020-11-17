/**
 * 透明缓存
 * **/

function slow(x) {
    // 这里可能会有重负载的 CPU 密集型工作
    // 如果每次传入 x 都有唯一确定不会变的返回值
    // 此时可以把结果缓存

    for (let i=0; i <= 6000000000; i++) {
        x = x + 1;
    }
    console.log(`Called with ${x}`);
    return x;
}


//缓存装饰者
function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        //let result = func(x);  这里会丢失 this
        //相对于 worker.slow = cachingDecorator(worker.slow), cachingDecorator 中可以识别 this ,this 是worker,
        //但是 被传进去的 slow () 丢失了自己的 this
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}
//slow = cachingDecorator(slow);
//slow(1);
//slow(2);
//slow(3);
let worker = {
    someMethod() {
        return 2;
    },

    slow(x) {
        console.log(`Called with ${x}`);
        return x * this.someMethod(); // (*)
    }
};

console.log(worker.someMethod());
worker.slow = cachingDecorator(worker.slow)

//包装器只是保存了func, 但是func丢失了this

console.log(worker.slow(1))

//有一个特殊的内置函数方法 func.call(context, …args)，它允许调用一个显式设置 this 的函数。
function sayHi(age, sex) {

    console.log("I am Say Hi ! and my name is "+this.name,"I age is "+age+", my sex is "+ sex)
}


let user1 = { name : "古天乐" , age : 30 }
let user2 = { name : "宋钟基" , age : 42 }

sayHi.call(user2, 12, "男人")
sayHi.call(user1, 14, "女人")
sayHi.apply(user1, {age:14, sex:"女人"})

//call 和 bind 的区别， call 会立即执行 ，bind 绑定完成后，需要手动执行
//func.apply， 和 func.call不同， 需要传递参数时，call需要借助 spread 语法，apply不需要

// Spread 语法 ... 允许将 可迭代对象 args 作为列表传递给 call。
// apply 仅接受 类数组对象 args。
// 因此，当我们期望可迭代对象时，使用 call，当我们期望类数组对象时，使用 apply

/*** 一个应用 ： 方法借用  *****/
function hash() {
    //console.log( arguments ); // Error: arguments.join is not a function
    console.log([].join.call(arguments))
    //arguments.join(",") 会报错，因为它不是一个真正的数组
    //console.log(arr.join(arguments))
}

hash(1, 2)
