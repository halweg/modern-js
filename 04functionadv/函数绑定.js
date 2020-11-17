let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

//这里丢失了 user 上下文
setTimeout(user.sayHi, 1000); // Hello, undefined!
//setTimeout 比较特殊，因为 setTimeout 会给调用的函数设定 this = window

//不完美的解决方案1：使用包装器, user 在1000ms 之前被改变怎么办
setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);
setTimeout(() => user.sayHi(), 1000); // Hello, John!

user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};

//解决方案2：bind
let user2 = { name : "Mr.Wang" }
function sayHelloUser2() {
    console.log("Hello user2 U name is "+this.name);
}
console.log("----------------使用 bind 的方法解决 this 丢失的问题------------------")

let funUser = sayHelloUser2.bind(user2);
funUser();

console.log("----------------延时器之后的工作------------------")



