let div = document.getElementById("division");
let btn = document.getElementById("btn");
let url = "https://dummyjson.com/quotes?limit=3&skip=10";

function quote(value) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((val) => {
      if (val.quotes.length - 1 < value) {
        return;
      }
      let p = document.createElement("p");
      div.append(p);
      p.innerText = val.quotes[value].quote;
    })
    .catch((error) => {
      console.log("Fetch Error", error);
    });
}
let count = -1;
btn.addEventListener("click", () => {
  count++;
  quote(count);
});
