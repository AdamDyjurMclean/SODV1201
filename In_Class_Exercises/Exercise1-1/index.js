const head = document.querySelector("h1");

head.innerText = "This is a Header";

const title = document.querySelector("title");
title.innerText = "New Title";

const arr = ["January", "February", "March", "April"];

const list = document.querySelector("ul");

for (let i = 0; i < arr.length; i++) {
  list.innerHTML += arr[i] += "<br>";
}
