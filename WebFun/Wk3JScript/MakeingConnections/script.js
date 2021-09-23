console.log("page loaded...");

var newName = "Francis Frago"; 
var textElement = document.querySelector("#newName");

console.log(textElement);

function editProfile() {
    newName;
    textElement.innerText = "Alex Sandoval";
    console.log(newName);
}

function hide(elementName){
    elementName.remove()
}

var addRequest = 2;
var countElement1 = document.querySelector("#addRequest");

console.log(countElement1);

function add() {
    addRequest++;
    countElement1.innerText = addRequest;
    console.log(addRequest);
}


var subtractRequest = 500;
var countElement2 = document.querySelector("#subtractRequest");

console.log(countElement1);

function subtract() {
    subtractRequest--;
    countElement2.innerText = subtractRequest;
    console.log(subtractRequest);
}