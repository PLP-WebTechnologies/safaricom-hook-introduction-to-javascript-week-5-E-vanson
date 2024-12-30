const namee = "Njung'e Evanson Kamau";
console.log("The devs' name ", namee);

let age = 21;
console.log("The devs' age ", age);

const occupation = "Student";
console.log("The devs' occupation ", occupation);

const institution = "Chuka University";
console.log("The devs' institution ", institution);

const isEmployed = false;
console.log("Is the dev employed ", isEmployed);

const detailsArr = ["Njung'e Evanson Kamau", 21, "Student", "Chuka University", false];
console.log("Array with all devs' details ", detailsArr);

const detailsObj = {
    name: "Njung'e Evanson Kamau",
    age: 21,
    occupation: "Student",
    institution: "Chuka University",
    isEmployed: false
};
console.log("Object with all devs details ", detailsObj);

function calculator(a, b){
    let a = prompt("Enter the first number: ");
    if (a < 0) {
        alert("Number must be 0 or greater");
    }

    let b = prompt("Enter the second number: ");
    if (b < 0) {
      alert("Number must be 0 or greater");
    }

    let operation = prompt("Select an opration to perform")


}