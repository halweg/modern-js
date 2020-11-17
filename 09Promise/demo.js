//回调
function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(script)

    document.head.append(script)

}

loadScript(
    'http://libs.baidu.com/jquery/2.0.0/jquery.min.js',
    function (src) {
        console.log(src.src + "加载完成!")
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
            function (sec) {
                console.log(sec.src+"加载完成！")
            })
    }
);

let promise = new Promise(function(resolve, reject) {

    resolve(1);

    setTimeout(() => resolve(2), 1000);

});

//promise.then(alert);

/*

(async () => {
    let resw = fetch('http://libs.baidu.com/jquery/2.0.0/jquery.min.js');
    await resw;
    console.log($)
})();*/
