function sayHi() {
    console.log("Hi");
}
console.log(sayHi.name)

let sayHello = function() {
    console.log("hello");
};

let sayHell = function (str, ...arr) {
    console.log(str)
    let arfs = arr
    console.log(arfs.length)
}

sayHell("hell", "a", "b", "c", "d")

console.log(sayHell.length)

