// let startButton = document.getElementById("start");
let library = [{animal:"snake",fruit:"apple",name:"matthew"},{animal:"eagle",fruit:"orange",name:"dalton"},{animal:"lion",fruit:"lemon",name:"robert"}];

let rand = library[Math.floor(Math.random() * library.length)];

let answer = pickAnswer(rand);

function pickAnswer(obj) {
    let keys = Object.keys(obj)
    return obj[keys[keys.length*Math.random()<<0]];
}

console.log(rand);
console.log(answer);