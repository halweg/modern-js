'use strict'
let user = {
    name: "John"
};

let employee = {
    user : "MR.Li",
    age : 25,
}

//每个对象的    属性   都会有4个标志
//1 writable  可写？
//2 enumerable  如果为 true，则会被在循环中列出，否则不会被列出。
//3 configurable 该属性为 false 时， 对象成员的(元属性)不可以被配置
//4 value

//getOwnPropertyDescriptor 查询name属性 的完整信息
let descriptor = Object.getOwnPropertyDescriptor(user, "name")
let descriptor2 = Object.getOwnPropertyDescriptor(employee, "user")
console.log(descriptor2)

//设置对象的有关属性
Object.defineProperty(employee, "user", {value : "Mr.Zhao"})

Object.defineProperty(employee, "user", {
    writable: false
});

console.log( Object.getOwnPropertyDescriptor(employee, "user"))
//employee.user = "Wu Di"    // 我修改了 employee.user 的writable 属性为 false, employee的user属性从此九九不可以修改
console.log(employee)

Object.defineProperty(employee, "user", {value: "John",
    writable: false,
    configurable: true})

// 一旦设置 configurable 为 false
/*不能修改 configurable 标志。
  不能修改 enumerable 标志。
  不能将 writable: false 修改为 true（反之亦然）。
  不能修改访问者属性的 get/set（但是如果没有可以分配它们）。
*/
Object.defineProperty(employee, "user", {value: "jhon"})
console.log("-----------")
console.log(employee)



let employee2 = {
    name : "Mr.Su",
    age : 18,
    height : "199",

    get employeeHeight () {
        console.log("employee`s height is "+ this.height)
    },

    get employeeName () {
        console.log("employee`s name is "+ "employee : "+this.name)
    },

    set setEmployeeName(value) {
        this.name = value
    }
}

employee2.employeeHeight
employee2.setEmployeeName = "lilili"
employee2.employeeName


