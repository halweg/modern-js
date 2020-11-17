let sayHello = new Function("a", "b", "console.log(a); console.log(b)")

sayHello("hello", "word")

let sum = new Function("a", "b", "return a +b")

console.log(sum(1, 7))


//new function 无法获取上下文，需要显示的参数传递

function newFunction() {

    let value = "hello world"

    let excel = new Function("value" ,"console.log('ths value is '+value)")
    //let excel = new Function( "console.log('ths value is '+value)")  //报错 value未定义

    return excel;
}

newFunction()();
