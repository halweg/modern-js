/**     new操作符和构造器     **/
function User() {
    this.name = "Mr.Huang";
    this.age = 18;
}
let user = new User();   //如果函数被 new 的方式使用，会在函数内部 新建 this,然后返回 this

console.log(user);

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

function makeUser() {
    this.name = "nae";
    this.age = 1;
    this.sayNo = function() {
        console.log("no");
    }
    return this;
}

//一定不要忘记 new， new  就是 把当前的 this 传入函数，忘记加 new ,this变成了window
let employee = new Employee("kaiwen", 19);

console.log(employee);

// new

user = {}; // 这个 user 恰巧没有 address

console.log( user?.address); // Error!