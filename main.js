// let startButton = document.getElementById("start");
let library = [{animal:"snake",fruit:"apple",name:"matthew"},{animal:"eagle",fruit:"orange",name:"dalton"},{animal:"lion",fruit:"lemon",name:"robert"}];

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
}

function pickAnswer(obj) {
    let keys = Object.keys(obj)
    return obj[keys[keys.length*Math.random()<<0]];
}

function findHint(obj,str) {
    for (let key in obj) {
        if (obj[key] === str) {
            return key;
        }
    }
}

console.log(rand);
console.log(answer);
console.log(hint);

submitButton.addEventListener("click",clickSubmit);