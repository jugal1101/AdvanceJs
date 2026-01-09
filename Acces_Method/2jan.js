let promise = new Promise((resolve, reject) => {
  let num = 14;

  if (num % 2 == 0) {
    resolve("it is even:");
  } else {
    console.log("it is odd:");
  }
});
promise
  .then((res) => console.log(res));

// ## promise concept
// let promise = new Promise((resolve, reject) => {
//   let result = 0;

//   if (result > 40) {
//     resolve("it is passed");
//   } else {
//     reject("it is failed");
//   }
// })
// console.log(promise)
// promise.then((res) => console.log(res)
// ).catch((err) => console.log("this is err" , err))

// ## callback hell
// function data(senddata , nextdata){
//  setTimeout(() => {
//     console.log(senddata)
//     if(nextdata){
//         nextdata()
//     }
//  }, 2000);
// }
// data("hello",()=>{
//     data("how",()=>{
//         data("are you",()=>{
//             console.log("how its going on")
//         })
//     })
// })

// ## promise :
// let a;
// let promise = new Promise((resolve) => {
//   setTimeout(() => {
//     a = "you got it:";
//     resolve ("done")
//   }, 3000);
// });
// promise.then(() => {
//   alert(a);
//   console.log("hello")
// });

// ## practicing rest operators.
// let student = { name: "jack", age: 22, city: "maxico", gender: "male" };
// let {...details } = student;
// console.log(name);
// console.log(details);

// ## 3. Rest operators:  it can condens multiple value in one variable using rest operators.
//  function fruits(a,...b) {
//     console.log(a,b)
//  }
//  fruits("apple","kiwi","mango","jackfruit","banana")

// ## 2. practicing spread operators.
// let arr = ["jack","john","jasus"];
// let arr2 = ["jaga","jasus","javeri"];

// let combined = [...arr,...arr2]

// console.log(combined)

// # 2. spread operators :it can merge and combined array.
//  function fruits(...c){
//     console.log(c)
//  }
//  fruits("jackfruit","apple","banana","mango")

// ## 1. practicing Lexical Scope
// let studentdata = {
//     list : "12Th Std",
//     name : ["ajay","Raju","Mohan","Salini","Mena"],
//     getStudent(){
//         let that = this.list
//         this.name.map((data)=>{
//             console.log(that + " student is " + data)
//         })
//     }
// }

// studentdata.getStudent()

// ## 1. lexical scope with this
// let data = {
//     list: "friends",
//     name : ["jack","john","jasus"],
//     getfriend(){
//         let that = this.list
//         this.name.map((data)=>{
//             console.log(that + " " + data)
//         })
//     }
// }
//  data.getfriend()
