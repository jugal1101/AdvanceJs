import countryList from "./data.js";
let dropwdown = document.querySelectorAll(".dropdown select");

Object.keys(countryList).map((url) =>
  [...dropwdown].map((select) => {
    const option = document.createElement("option");
    option.innerText = url;
    option.value = url;

    if (select.name === "from" && url === "USD") {
      option.selected = true;
    } else if (select.name === "to" && url === "INR") {
      option.selected = true;
    }
    select.append(option);
  })
);

let btn = document.getElementById("btn")

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  let amount = document.querySelector(".amount input")
  let value = amount.value
if(value === "" || value<1){
 value = 1
 amount.value = "1"
}
  })

//   function currency(){
//  fetch(url).then((res)=>{
//     return res.json()
//    }).then(()=>{
//    let news = document.createElement("option")
//     //  console.log(countryList)
//      dropwdown.innerHTML = news
//      dropwdown.append(news)
//    })

//   }
// currency(countryList)
