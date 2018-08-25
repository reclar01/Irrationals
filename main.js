// let startButton = document.getElementById("start");
let library = [{animal:"snake",fruit:"apple",name:"matthew"},{animal:"eagle",fruit:"orange",name:"dalton"},{animal:"lion",fruit:"lemon",name:"robert"}];

let rand = library[Math.floor(Math.random() * library.length)];

let answer = pickAnswer(rand);

let hint = findHint(rand,answer);
//adding array of images
let imgArray = ["images/Gallow.jpg","images/head.jpg","images/body.jpg","images/arm1.jpg","images/arm2.jpg","images/leg1.jpg","images/leg2.jpg","images/didntdoit.jpg"];
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