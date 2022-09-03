function clickall() {
    document.getElementById('wrapper').style.justifyContent="center";
    document.getElementById('header').style.display="none";
    document.getElementById('footer').style.display="none";
    document.getElementById('main').style.display="flex"
}
function helloclick() {
    clickall();
    document.getElementById('hello').style.display="flex";
}
function introclick() {
    clickall();
    document.getElementById('intro').style.display="flex";
}
function workclick() {
    clickall();
    document.getElementById('work').style.display="flex";
}
function emailclick() {
    clickall();
    document.getElementById('email').style.display="flex";
}
function back() {
    document.getElementById('wrapper').style.justifyContent="space-between";
    document.getElementById('header').style.display="flex";
    document.getElementById('footer').style.display="flex";
    document.getElementById('main').style.display="none"
    document.getElementById('hello').style.display="none";
    document.getElementById('intro').style.display="none";
    document.getElementById('work').style.display="none";
    document.getElementById('email').style.display="none";
}
document.addEventListener('mousedown', (e) => {
    let t = document.getElementById('main') // 最外层元素
    if (!e.path.includes(t)) {
        back();
    } else {
    }
})