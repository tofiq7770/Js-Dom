"use strict";

let icon = document.querySelector("i");
let light = icon;
let dark = icon;
let i = icon;
let body = document.querySelector("body");

icon.addEventListener("click", function () {
  if (i.classList.contains(".light")) {
    i.classList.add(".dark");
    i.classList.remove(".light");
    dark.style.color = "rgba(255, 255, 0, 0.725)";
    body.style.backgroundColor = "black";
  } else {
    i.classList.add(".light");
    i.classList.remove(".dark");
    dark.style.color = "black";
    body.style.backgroundColor = "rgba(255, 255, 0, 0.725)";
  }
});
