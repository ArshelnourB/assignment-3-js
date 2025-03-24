const body = document.querySelector("body");

// adds my student id to the page
var myStudentId = document.querySelector("p");
myStudentId.textContent = "Arshelnour Boudala - 1270455";

// placeholders for all parts of the pizza
var pizzaSize;
var pizzaCheese;
var pizzaCrust;
var pizzaTopping1;
var pizzaTopping2;
var pizzaTopping3;
var pizzaTopping4;
var pizzaTopping5;
var pizzaXtra;

var pizzaToppings = []; // placeholder for pizza toppings
var toppingNum = 0 // holds number of toppings user chooses

var submitButton = document.querySelector("button");

// class for user-created pizza
class Pizza {
    size;
    cheese;
    crust;
    toppings;
    constructor(size, cheese, crust, toppings, xtra) {
        this.size = size;
        this.cheese = cheese;
        this.crust = crust;
        this.toppings = toppings;
        this.xtra = xtra;
    }
    pizzaDesc(){
        let desc = document.createElement("p");
        desc.textContent = `A ${this.size} ${this.cheese} pizza with a ${this.crust} crust and ${this.toppings} for toppings. Extra requests: ${this.xtra}`;
        body.appendChild(desc);
    }
}

function addOptions(){
    // Captures values from each of the form inputs
    pizzaSize = document.getElementById("pizzaSize");
    pizzaCheese = document.getElementById("pizzaCheese");
    pizzaCrust = document.getElementById("pizzaCrust");
    pizzaTopping1 = document.getElementById("topping1");
    pizzaTopping2 = document.getElementById("topping2");
    pizzaTopping3 = document.getElementById("topping3");
    pizzaTopping4 = document.getElementById("topping4");
    pizzaTopping5 = document.getElementById("topping5");
    pizzaXtra = document.getElementById("xtra");
    pizzaToppings = []
    toppingNum = 0;

    // checks if each of the toppings were clicked by the user, and adds the topping to the pizzaToppings variable if they were
    if(pizzaTopping1.checked == true){
        pizzaToppings.push(pizzaTopping1.value);
        toppingNum++;
    }
    if(pizzaTopping2.checked == true){
        pizzaToppings.push(pizzaTopping2.value);
        toppingNum++;
    }
    if(pizzaTopping3.checked == true){
        pizzaToppings.push(pizzaTopping3.value);
        toppingNum++;
    }
    if(pizzaTopping4.checked == true){
        pizzaToppings.push(pizzaTopping4.value);
        toppingNum++;
    }
    if(pizzaTopping5.checked == true){
        pizzaToppings.push(pizzaTopping5.value);
        toppingNum++;
    }

    // if none were clicked, pizzaToppings variable is chnged to "nothing"
    if(toppingNum === 0){
        pizzaToppings.push("nothing");
    }

    // creates pizza Object and outputs teh description
    let myPizza = new Pizza(pizzaSize.value, pizzaCheese.value, pizzaCrust.value, pizzaToppings, pizzaXtra.value);
    myPizza.pizzaDesc();
}

// event listener for submit button
submitButton.addEventListener("click", addOptions);
