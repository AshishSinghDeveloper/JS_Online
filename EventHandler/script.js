const center = document.querySelector(".center");

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

var getBGColor = (color) => {
    return window.getComputedStyle(color).backgroundColor;
};

//Method 1
// document.querySelector(".red").onmouseover = function() {
//     center.style.backgroundColor = getBGColor(red);
// }
// document.querySelector(".cyan").onmouseover = function() {
//     center.style.backgroundColor = getBGColor(cyan);
// }
// document.querySelector(".violet").onmouseover = function() {
//     center.style.backgroundColor = getBGColor(violet);
// }
// document.querySelector(".orange").onmouseover = function() {
//     center.style.backgroundColor = getBGColor(orange);
// }
// document.querySelector(".pink").onmouseover = function() {
//     center.style.backgroundColor = getBGColor(pink);
// }


//Method 2
// document.querySelector(".red").addEventListener('mouseenter', e => {
//     center.style.backgroundColor = "#e44236";
// });
// document.querySelector(".cyan").addEventListener('mouseenter', e => {
//     center.style.backgroundColor = "#25ccf7";
// });
// document.querySelector(".violet").addEventListener('mouseenter', e => {
//     center.style.backgroundColor = "#8b78e6";
// });
// document.querySelector(".orange").addEventListener('mouseenter', e => {
//     center.style.backgroundColor = "#ea7773";
// });
// document.querySelector(".pink").addEventListener('mouseenter', e => {
//     center.style.backgroundColor = "#bb2cd9";
// });

//Method 3 (DRY of method 2)
const colorChange = (color) => {
    return color.addEventListener('mouseenter', e => {
        center.style.backgroundColor = getBGColor(color);
    });
};

colorChange(red);
colorChange(cyan);
colorChange(violet);
colorChange(orange);
colorChange(pink);