
{
    let message = "hello world";
    const message2 = "const message";
    console.log(message2);
}

{
    let message2 = "代码块2 处的message2";
    console.log(message2);
}

if (true) {
    let ifCondition = "if condition is true";
    console.log(ifCondition)
}
//在这里 console.log(ifCondition); 会报错，因为 不在同一个代码块里

//嵌套函数
console.info("------------嵌套函数---------------------");
function sayHiBye(firstName, lastName) {

    function getFullName() {
        return firstName + " " + lastName;
    }

    console.info("Hi, " + getFullName());
    console.info("Bye, " + getFullName());

}

sayHiBye("Mr. ", "Li");

function makeCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());




