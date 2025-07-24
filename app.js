

var hellow1 = document.getElementById("hellow1");
var speed = 5
var flag = false;
var flag2 = false;

function hellow(takeOrder) {
    if (takeOrder === "forward") {
        speed += 5;
        hellow1.style.left = speed + "px";
        if (!flag) {
            flag2 = false;
            hellow1.src = 'andrew-run.gif';
        }
        flag = true;
    } else if (takeOrder === "backward") {
        speed += -5;
        hellow1.style.left = speed + "px";
        if(!flag2){
            flag = false;
             hellow1.src = 'andrew-jab.gif';
            flag2 = true;
        }
    }
}

function andrew(event){
    console.log(event.key);
    if (event.key === "ArrowRight"){
         hellow("forward");
    } 
    else if(event.key === "ArrowLeft" ){
        hellow("backward"); 

    }
    
}
window.addEventListener("keydown", andrew)








// Player 2
var opponent1 = document.getElementById("opponent1");
var speed2 = 5;
var must = false;
var must2 = false;

function opponent(takeOrder) {
    if (takeOrder === "forward") {
        speed2 += 5;
        opponent1.style.left = speed2 + "px";
        if (!must) {
            must2 = false;
            opponent1.src = 'sf-bishamon.gif';
        }
        must = true;
    } else if (takeOrder === "backward") {
        speed2 += -5;
        opponent1.style.left = speed2 + "px";
        if (!must2) {
            must = false;
            opponent1.src = 'bishamon-laughchest.gif';
            must2 = true;
        }
    }
}

function talk(event) {
    console.log(event.key);
    if (event.key === "Backspace") {
        opponent("forward");
    } else if (event.key === "Shift") {
        opponent("backward");
    }
}

window.addEventListener("keydown", talk);





let gameStarted = false;

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
    gameStarted = true;
    startBtn.style.display = "none";  
});



