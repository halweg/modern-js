let id2 = Symbol("id");

let user = {
    name : "John"
};

let id = Symbol("id");
user[id]  = 1;

user.id = "ppppp";

console.log(user.id);

let user2 = {
    name : "测试Symbol",
    id : 30033,
    [id] : 1
};

console.log(user2[id]);
console.log(user2.id)

for (let key in user2) {
    console.log(key)
}

let id4 = Symbol.for("id");

console.log("id2 : ");