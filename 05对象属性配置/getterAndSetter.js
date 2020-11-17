
//01 getter and setter
let user = {
    name : "nick",
    surname : "chen",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(name) {
        [this.name, this.surname] = name.split(" ")
    }
}
console.log("=============getter and setter=============")
user.fullName = "james chao"
console.log(user.fullName)

//02
