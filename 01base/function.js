let functionVar = "函数的外部的变量";
function showMessage() {
    console.log("This is a message!")
    let functionVar = "函数外部的变量被修改了";
    console.log(functionVar)
}

//showMessage();
//console.log(functionVar);


//函数表达式
let sayHi = function () {
    console.log("Hi");
};

let func = sayHi;

console.log(func);
func();

//回调函数
function ask(question, yes, no ) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showYes() {
    alert("I am ok")
}

function showNo() {
    alert("I am not ok");
}

ask("Are you ok my friends?", showYes, showNo)