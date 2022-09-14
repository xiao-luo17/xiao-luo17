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
    document.getElementById('main').style.display="none";
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
function f() {
    imgArray=['url("./img/background0.jpg")','url("./img/background1.jpg")','url("./img/background2.jpg")',
        'url("./img/background3.jpg")','url("./img/background4.jpg")','url("./img/background5.jpg")',
        'url("./img/background6.jpg")','url("./img/background7.jpg")','url("./img/background8.png")',
        'url("./img/background9.png")','url("./img/background10.jpg")']
    a=Math.floor(Math.random()*10);
    var d = document.getElementById('bg');
    d.style.backgroundImage = imgArray[a];
}