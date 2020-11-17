window.user = "window user var"
if (!window.Promise) {
    alert("Your browser is really old!");
}

function  printUser() {
    console.log(window.user)
}

printUser()
