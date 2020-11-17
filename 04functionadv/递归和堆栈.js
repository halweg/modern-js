function pow(x, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res = res * x;
    }
    return res;
}

function pow2(x, n) {
    if (n == 0) {
        return 1;
    }

    x = x * pow2(x, n-1);

    return x;

}

//递归求和，求出 1到x的西格玛
function sumTo(x) {
    if (x == 1) {
        return 1;
    }

    let res = x + sumTo(x-1)

    return  res
}


function fibList(x) {
    let a = 1;
    let b = 1;

    for (let i=0; i<x; i++) {
        console.log(" "+a)
        let tmp = a
        a = b
        b = tmp + a
    }

}

fibList(18)
