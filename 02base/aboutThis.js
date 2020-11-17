let user = {
    name : "joe",
    age : 17,
    job : "学生"
};

function sayHello() {
    console.log("hello")
}

user.sayHi = function () {
  console.log("hi");
};

user.sayHello = sayHello;

//user.sayHello();

// 方法的简写

user = {
    name: "hahahahah",
    sayYes : function () {
        console.log("yes")
    }
};

user.sayYes();

user = {
  name : "Geo",
  sayNo() {
      console.log("sorry, no");
  },

  sayName() {
      console.log("This is my name: " + this.name)
  }
};

user.sayName();

function makeUser() {
    console.log(this);
    return {
        name : "User",
        ref : this
    }
}

let User = makeUser();

//计算器
let calculator = {
    res : 0,

    read(a, b) {

    },
    sum(a, b) {
        this.res  += (a + b);
        return this.res;
    },

};
