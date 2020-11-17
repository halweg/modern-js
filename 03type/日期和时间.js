let now = new Date();

console.log(now)
//创建一个date,等于 1970 往后推 24 * 3600 * 1000 微秒
console.log(new Date( 24 * 3600 * 1000 ))

let timeStamp = now.getTime();
console.log(timeStamp)

let strDate = new Date('2017-1-26');
console.log(strDate)

let intDate = new Date(2020, 0, 1);
console.log(intDate)

//时间度量最小可以到 1 ms
let date = new Date(2019, 1, 28, 2, 54, 17, 666);
console.log(date)

//访问日期组件
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate())

//getHours()，getMinutes()，getSeconds()，getMillisec

console.log("Date.parse is", Date.parse("2020--9-01 14:09:01"))






