let url = "https://jsonplaceholder.typicode.com/todos/";
let p = document.getElementById("facts");
let btn = document.getElementById("btn")
function getdata() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((val, index) => {
      console.log(val);

      val.map((title) => {
     p.innerText = val[title[1]]
      });
    });
}

btn.addEventListener('click',()=>{
   getdata();
})
// let p = document.getElementById("facts");
// let data = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((val) => {
//     p.innerText = val;
//   });
//    function number(even){
// for(i=1; i<=even; i++){
//    if(i%2==0){
//       console.log(i)
//    }else{
//       console.log("odd no is" , i)
//    }
// }
//    }
//    number(20)

//    let URL = "https://jsonplaceholder.typicode.com/posts";
//    let factpara = document.getElementById("#facts");

//   const getfacts = async ()=>{
//      console.log("fetching data....")
//      let response = await fetch(URL)
//      console.log(response);
//      let data = await response.json();
//      factpara.innerText = data
//   }
//   getfacts()
