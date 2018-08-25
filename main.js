// let startButton = document.getElementById("start");
let library = [{animal:"snake",fruit:"apple",name:"matthew"},{animal:"eagle",fruit:"orange",name:"dalton"},{animal:"lion",fruit:"lemon",name:"robert"}];

let rand = library[Math.floor(Math.random() * library.length)];

let answer = pickAnswer(rand);

let hint = findHint(rand,answer);

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