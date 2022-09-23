var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
