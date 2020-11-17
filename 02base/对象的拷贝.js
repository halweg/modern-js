//对象拷贝，引用
let message = "Hello";

let phrase = message;

message = "message";

let user = {
    name : "乔恩"
}

let admin = user;

user.name = "乔";

let user2 = {

};

user2.name = user.name;

user.name = "Jhon";

/**       对象克隆与合并       **/
let solder = {
    name: "steven",
    age : 25,
    gender : 'f',
    job : "land solder"
}
let solder2 = {};
let solder3 = {};
for (let key in solder) {
    solder2[key]= solder[key]
}

//对象克隆的第二种方法:
//Object.assign(solder3, solder2);
solder2.name = "qiwei";
//console.log(solder3);

//对象的克隆与浅克隆
let obj = {
    name : "BMW",
    age : "2007",
    size : {
        height : 200,
        width : 180
    }
};

let clone = {};
Object.assign(clone, obj);
obj.size.height = 0;
console.log(clone.size)









