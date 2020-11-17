function sayHi(date) {
    console.log("hi,i am in sayHi() , the time is " + date)
}

//setTimeout(sayHi, 2000, "2020年9月7号")


let inCre = 1;

let timeOutIdentify = setTimeout(autoAdd, 1000,inCre)
function autoAdd(inCre) {
    console.log(inCre);
}

//(function (inCre) { console.log("Hi, inCre is "+ inCre) } , 5000, inCre)

//setTimeout(inCre => console.log("hi, i am in arrow inCre is "+ inCre) , 5000, inCre)

times = 10;
let timerId = setInterval(function (){
    times -= 1;

    if (times < 0) {
        clearInterval(timerId)
        return
    }
    //console.log(times)

}, 100);

let timer2 = 10
let timerId2 = setInterval(() => timer2 < 0 ? clearInterval(timer2) : ()=> { console.log("testetsetstse"); console.info(timer2--)}  );

/******
 *
 * 周期性执行某函数的两种方式
 *
 * 1.使用 setInterval
 * 2使用嵌套的鹅setTimeout
 *
 * *****/

let i = 1;
setTimeout(function run() {
    i += 1;
    console.log(i+"t")
    setTimeout(run, 100);
}, 100);
