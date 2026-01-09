// ## rest operators : it condess multiple items in one variable.
function logargs(first,sec,...rest){
console.log(first);
console.log(sec);
console.log(rest);
}
logargs(1,2,3,4,5)


// ## spread operators : it can merge or combined the array.
let a = [1,2,3];
let b = [4,5,6];
let c = [...a,...b]
console.log(c)





// area of rectangle using oop
// class area {
//     areaofRectangle(height,width){
//     console.log(height * width)
//     }
// }

// const area1 = new area()
// const area2 = new area()

// area1.areaofRectangle(10,20)
// console.log("hello");
// area2.areaofRectangle(30,20);

// // inheritance , child can acces parents objects , it means child can inherit the parents property.
// // # class
// class sportsCar{
//     ferrari(){
//         return "it is a sports car"
//     }
//     lambo(){
//         return "it is also a speedy car"
//     }
// }
// // when a child can acces parents object it can access with extend with super() method its called inheritance (varsagat)

// class car extends sportsCar {
//     constructor(){
//         super()
//       console.log("constructor")
//     }
//     xuvCar(){
//         return "it is an highly sell car"
//     }
// }

// //## object
// let a = new car;
// let b = new sportsCar
// console.log(a.lambo())
// console.log(a.ferrari())
// console.log(a.xuvCar())

// class category {
//     dryfruits(){
//         return "almonds can mostly eat in winter"
//     }
//     pomefruits(){
//         return "apple is a type of pomefruits"
//     }
// }

// class fruits extends category {

//     constructor(){
//        super()
//         console.log("constructor")
//     }
//    getFruits(){
//     return "apple is sweet."
//    }
// }

// let a = new fruits
// let b = new category
// console.log(a.dryfruits());
// console.log(b.pomefruits());
// console.log(a.getFruits());

// let a = [10,20,30,40,50];

// let arr = a.map(function(data){
//     return data*2
// })
// console.log(arr)

// let name = {
//     firstname : "jugal",
//     lastname: "rana",
//     printfullname: function(){
//         console.log(this.firstname + "" + this.lastname); // this :
//     }
// }
// name.printfullname()

// let newname = {
//     firstname:"MS",
//     lastname:"Dhoni",
// }
// name.printfullname.call(newname) // call: it can pass the whole function from another object
