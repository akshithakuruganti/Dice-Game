var a = Math.floor(Math.random() * 6) + 1;
var aimg = "images/dice" + a + ".png";
var target = document.querySelectorAll("img")[0];
target.setAttribute("src", aimg);

var b = Math.floor(Math.random() * 6) + 1;
var bimg = "images/dice" + b + ".png";
var target1 = document.querySelectorAll("img")[1];
target1.setAttribute("src", bimg);

var sum = a + b;

if (sum >= 10) {
    document.querySelector("h1").innerHTML = "🚩 You Win! Total: " + sum;
} else {
    document.querySelector("h1").innerHTML = "You Lose! Total: " + sum;
}
