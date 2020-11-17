let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            //箭头函数牛逼，没有自己的 this, 所以this就是 最近的 group
            student => console.log(this.title+" : "+student)
        );
    },

    showList2() {
        this.students.forEach(
            function (s) {
                //this.title 就变成了 undefined,
                //因为 这里的 this 是 forEach 里面运行的这个 函数的this
                console.log(this.title + " : "+s)
            }
        )
    }
};
//group.showList2()
