// let startButton = document.getElementById("start");
let library = [{animal:["snake","lion","eagle","elephant","buffalo","squirrel","badger","alligator","bear","beaver"]},{fruit:["apple","orange","lemon","cherry","banana","blueberry","coconut","avocado","blackberry","grapefruit"]},{name:["matthew","dalton","robert","alissa","dreima","allen","alex","jessica","hannah","scott"]}];

let rand = library[Math.floor(Math.random() * library.length)];

let answer = pickAnswer(rand);

let hint = findHint(rand,answer);
let img = document.getElementById("gallow");
let mistakeLetters = document.getElementById("letter-bank");
let mistakes = [];

let submitButton = document.getElementById("input-button");
let inputText = document.getElementById("input-text");


let category = document.getElementById("category");

category.innerHTML= "Word Category: " + hint;

let blankWord = document.getElementById("blank-word");
let blankWordText = [];

for(let i=0; i<answer.length; i++){
 blankWordText.push("-");
}
blankWordText = blankWordText.join("");
blankWord.innerHTML = blankWordText;

function clickSubmit(){
    if(inputText.value.length > 1){
        alert("Please only select one letter");
        inputText.value = "";
        return;
    }
    inputText.value = inputText.value.toLowerCase();
if(inputText.value === ""){
    alert("Please submit a letter");
    return;
}
    answer = answer.split("");
    blankWordText = blankWordText.split("");
    if(mistakes.indexOf(inputText.value)>=0){
            alert("Letter already used");
            inputText.value="";
            return;
    }
    if(blankWordText.indexOf(inputText.value)>=0){
        alert("Letter already used");
        inputText.value="";
        return;
}
    if (answer.indexOf(inputText.value) < 0) {
        mistakes.push(inputText.value);
        console.log(mistakes);
        if(mistakes.length === 1){
            img.src="images/head.jpg";
        }
        if(mistakes.length === 2){
            img.src="images/body.jpg";
        }
        if(mistakes.length === 3){
            img.src="images/arm1.jpg";
        }
        if(mistakes.length === 4){
            img.src="images/arm2.jpg";
        }
        if(mistakes.length === 5){
            img.src="images/leg1.jpg";
        }
        if(mistakes.length === 6){
            img.src="images/leg2.jpg";
        }
        if(mistakes.length === 7){
            img.src="images/didntdoit.jpg";
        }
    }
    for(let j=0; j<answer.length; j++){
        if(inputText.value === answer[j]){
            blankWordText[j] = answer[j];
            
        }
        
             blankWord.innerHTML=blankWordText;
    }
    console.log(answer);
    console.log(blankWordText);
     blankWordText = blankWordText.join("");
             answer= answer.join("");
             if(blankWordText === answer){
                submitButton.parentNode.removeChild(submitButton);
                 alert("You Win!");
                 inputText.value = "";
             }
             mistakeLetters.innerHTML = mistakes;
             if(mistakes.length === 7){
                 submitButton.parentNode.removeChild(submitButton);
                 alert("You Lose!");
                 inputText.value = "";
             }
             inputText.value = "";
}

function pickAnswer(obj) {
    for (let key1 in obj){
        let arr = obj[key1];
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

function findHint(obj) {
    for (let key in obj) {
            return key;
    }
}

console.log(rand);
console.log(answer);
console.log(hint);

submitButton.addEventListener("click",clickSubmit);