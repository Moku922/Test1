// console.log(document.head)
// console.log(document.body)
// console.log(document.)
let headerTitle = (document.getElementById("header-title"));
headerTitle.innerText = "Hello"

headerTitle.style.border = "solid 3px #000"

let title = document.getElementsByClassName("title")[0];
// console.log(title);
title.style.color = "green"
title.style.fontWeight="900"

let item = document.querySelectorAll("list-group-item")[0];

item.innerText = "First"
