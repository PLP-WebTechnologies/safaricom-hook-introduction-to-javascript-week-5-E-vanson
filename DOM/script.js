// **Variables and Data Types**:
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

const devName = detailsObj.name || detailsArr[0];
console.log("The Devs Name: ", devName);

const devAge = detailsObj.age || detailsArr[1];
console.log("The Devs Age: ", devAge);

const devOccupation = detailsObj.occupation || detailsArr[2];
console.log("The Devs Occupation: ", devOccupation);

const devInstitution = detailsObj.institution || detailsArr[3];
console.log("The Devs Institution: ", devInstitution);

const devIsEmployyyyed = detailsObj.isEmployed || detailsArr[4];
console.log("The Devs Occuation Status: ", devOccupation);


//  **Operators**:
function calculator(){
    let a = Number(prompt("Enter the first number: "));
    if (a < 0) {
        alert("Number must be 0 or greater");
        return;
    }

    let b = Number(prompt("Enter the second number: "));
    if (b < 0) {
        alert("Number must be 0 or greater");
        return;
    }
    let operation = prompt("Select an opration to perform: (+, -, *, /)");
    if(!['+', '-', '*', '/'].includes(operation)){
        alert("Select a valid operation");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        default:
            console.log("Enter a valid operator");
    }
    console.log("The result is: ", result);
}

