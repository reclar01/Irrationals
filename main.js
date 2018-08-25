// let startButton = document.getElementById("start");
let library = [{animal:["snake","lion","eagle","elephant","buffalo","squirrel","badger","alligator","bear","beaver"]},{fruit:["apple","orange","lemon","cherry","banana","blueberry","coconut","avocado","blackberry","grapefruit"]},{name:["matthew","dalton","robert","alissa","dreima","allen","alex","jessica","hannah","scott"]}];

let rand = library[Math.floor(Math.random() * library.length)];

let answer = pickAnswer(rand);

let hint = findHint(rand,answer);

let submitButton = document.getElementById("input-button");
let inputText = document.getElementById("input-text");


let category = document.getElementById("category");

category.innerHTML= "The word you are looking for is a " + hint;

let blankWord = document.getElementById("blank-word");
let blankWordText = [];

for(let i=0; i<answer.length; i++){
 blankWordText.push("-");
}
blankWordText = blankWordText.join("");
blankWord.innerHTML = blankWordText;

function clickSubmit(){
    answer = answer.split("");
    blankWordText = blankWordText.split("");
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
                 alert("You Win!");
             }
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