// objects practice

// var obj = {
//     name: "huzaifa",
//     age: "20",
//     email:"huzaifanadeem621@gmail.com"
// }
// console.log(obj);
// document.write(obj.name+ " "+obj.age+ obj.email)

// var a={
//     fullname:["huzaifa","20","javascript"]
// }

// function Std (name,age,subject){
//     this.stdname = name
//     this.stdage = age
//     this.stdsubject = subject
// }
            // objects
function Std(name,age,subject){
    this.stdname = name;
    this.stdage = age;
    this.stdsubject = subject;
}

var std1 = new Std("huzaifa",20,"web and mobile")
var std2 = new Std("aun","50","blockchain")
console.log(std1);
console.log(std2);


// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var item1 = itemsArray[0].price * itemsArray[0].quantity
var item2 = itemsArray[1].price * itemsArray[1].quantity
var item3 = itemsArray[2].price * itemsArray[2].quantity
var item4 = itemsArray[3].price * itemsArray[3].quantity

document.write(`Total Price Of Item 1: ${item1} <br />
                Total Price Of Item 2: ${item2} <br />
                Total Price Of Item 3: ${item3} <br />
                Total Price Of Item 4: ${item4} <br />`)

var totalAmnt = 0
for (var i = 0; i < itemsArray.length; i++) {

    totalAmnt += itemsArray[i].price * itemsArray[i].quantity

}
document.write(`Total Amount:  ${totalAmnt}`)


// QUESTION 02
var obj = {
    name: "huzaifa",
    email: "huzaifanadeem621@gmail.com",
    password:"password",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}

var ageCheck = "age" in obj
var countryCheck = "country" in obj
if (ageCheck) {
    alert("Yes age is included Obj")
}
if (countryCheck) {
    alert("Yes country is included in Obj")

}

var fNameCheck = "firstName" in obj;
var lNameCheck = "lastName" in obj;
if (fNameCheck) {
    alert("yes firstName is included in obj")
}
else {
    alert("firstName is not included in obj")
}
if (lNameCheck) {
    alert("yes lastName is included in obj")
}
else {
    alert("lastName is not included in obj")
}


// QUESTION 03
function Std(name, school, age, gender) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.gender = gender;
}
var std1 = new Std("huzaifa", "BMJ", 20, "Male");
var std2 = new Std("hamamad", "BMJ", 19, "Male");
var std3 = new Std("aun", "BMJ", 22, "Male");
console.log(std1)
console.log(std2)
console.log(std3)


// QUESTION 04
function Records(name, gender, address, education, profession) {
    this.Name = name;
    this.Gender = gender;
    this.Address = address;
    this.Education = education;
    this.Profession = profession;
}
var person1 = new Records("huzaifa", "Male", "malir", "HSC", "student")
var person2 = new Records("Areeb", "Female", "model cololny", "HSC", "Student")
var person3 = new Records("Bilal", "Male", "Graduate", "Engineer")

document.getElementById("myselectbox")
Select = "<select>" +
    "<option>" + "HSC" + "</option>" +
    "<option>" + "Under Graduate" + "</option>" +
    "<option>" + "Matric" + "</option>" +
    "<select>"

myselectbox.innerHTML = Select

document.getElementById("myselectbox2")
Select2 = "<select>" +
    "<option >" + "Profession" + "</option>" +
    "<option>" + "student" + "</option>" +
    "<option>" + "Bussinessman" + "</option>" +
    "<option>" + "Physiologist" + "</option>" +
    "<select>"

myselectbox2.innerHTML = Select2



























// https://rafin-sonselectronic-com.web.app/https://rafin-sonselectronic-com.web.app/