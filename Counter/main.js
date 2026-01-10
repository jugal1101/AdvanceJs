let display = document.getElementById("display");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let plus = document.getElementById("plus");

let count = 0;
let value = 0;

function inc() {
  count++;
}

function dec() {
  count--;
}

function resets() {
  count = value;
}
function displayupdate() {
  display.innerText = count;
}

minus.addEventListener("click", () => {
  dec();
  displayupdate();
});
plus.addEventListener("click", () => {
  inc();
  displayupdate();
});
reset.addEventListener("click", () => {
  resets();
  displayupdate();
});
