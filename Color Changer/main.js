let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let body = document.getElementById("body")


color1.addEventListener('click',()=>{
  body.style.backgroundColor = "rgb(250, 86, 77)";
})


color2.addEventListener('click',()=>{
  body.style.backgroundColor = " rgb(64, 79, 243)";
})
color3.addEventListener('click',()=>{
  body.style.backgroundColor = " rgb(102, 244, 221)";
})
color4.addEventListener('click',()=>{
  body.style.backgroundColor = "rgb(255, 0, 81)";
})