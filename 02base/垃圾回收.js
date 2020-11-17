/**     js中的垃圾回收  **/
let user = { name : "steven" };
let admin = user;
user = null;
console.log(admin)