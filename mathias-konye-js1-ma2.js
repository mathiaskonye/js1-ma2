// Question 1

const myFunctionExpression = function () {
    console.log("mathiaskonye"); 
};

// Question 2

function btn() {
    console.log("I was clicked");
}

document.addEventListener("click", btn)

// Question 3

function firstName (event) {
    console.log(event);
}


document.addEventListener("keydown", firstName)

// Question 4

const button = document.querySelector("button");
button.addEventListener("mouseover", addHover);


function addHover () {
    button.classList.add("hover")
    console.log("hover")
};

// Question 5

const buttonOut = document.querySelector("[data-animal='dog']");
buttonOut.addEventListener("mouseout", removeClass)

function removeClass() {
    buttonOut.classList.remove("hover")
    console.log("remove");
}

// Question 6

const listItemsArray = document.querySelectorAll("li")
console.log(listItemsArray);

for(i = 0; i < listItemsArray.length; i++) {
    const liElement = listItemsArray[i];

    function logDataAttribute() {
        const dataAttribute = liElement.dataset.animal;
        console.log(dataAttribute)
    }

    liElement.addEventListener("mouseover", logDataAttribute);
}

// Question 7

const animal = "cow";

switch(animal) {

case "cat":    
    console.log("Meow");
    break;
case "bird":
    console.log("Tweet");
    break;
case "cow":
    console.log("Moo");
    break;
default:
    console.log("Harrumph");
    break;
};

// Question 8 

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// Question 9

function logHello() {
    console.log("hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}

let counter = 0;
const intervalId = setInterval(logHello, 500);

// Question 10

const counterContainer = document.querySelector(".container");

function updateDiv() {
    counterContainer.innerHTML = "updated text";
}

setInterval(updateDiv, 2000);

