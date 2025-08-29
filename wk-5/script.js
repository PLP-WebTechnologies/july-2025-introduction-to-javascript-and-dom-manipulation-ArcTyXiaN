// Part 1: Variables & Conditionals

let name = "Obaloluwa";
let age = 18;

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is under 18.");
}


// Part 2: Functions

function changeText() {
    document.getElementById("main-title").textContent = "Text Changed!";
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Part 3: Loops

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
    console.log("For loop count: " + i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
    console.log("While loop count: " + count);
    count++;
}


// Part 4: DOM Interactions


// 1. Change text when button is clicked
document.getElementById("change-text-btn").onclick = changeText;

// 2. Change background color when button is clicked
document.getElementById("color-btn").onclick = changeBackgroundColor;

// 3. Add list items dynamically
let list = document.getElementById("list");
for (let i = 1; i <= 5; i++) {
    let item = document.createElement("li");
    item.textContent = "Item " + i;
    list.appendChild(item);
}
