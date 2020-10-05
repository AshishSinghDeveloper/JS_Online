var cId = document.getElementById("cid");
var fId = document.getElementById("fid");

var count = 1
setInterval(() => {
    if (count <= 1000) {
        cId.innerText = count;
        count++;
    }
}, 10);

setTimeout(() => {
    fId.innerText = "1000 followers in instagram";
}, 10700)