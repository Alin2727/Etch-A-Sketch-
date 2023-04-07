let color = "black";
let click = false;

let buttonSelect = document.querySelector("#popup");
buttonSelect.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);

});

// Allow drawing on click

document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click;
        let draw = document.querySelector(`#draw`);
    }if(click){
        draw.innerHTML = "You are free to draw"
    }else{
        draw.innerHTML = "Not allowed to draw, click and you can draw !"

    }
    
})



// Create the size of the board


function createBoard(size){
    let board = document.querySelector(".middle-container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){

        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
        }
        
        
    }


function getSize(){
    let input = prompt("What will be the size of your board ?");
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML = "Please enter a number";
    } else if (input < 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 - 100";
    } else {
        message.innerHTML = "Let's start drawing !";
        return input;
    }
}


function colorDiv(){

    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }  else {
            this.style.backgroundColor = "black"
        }


    }

}

function setColor(colorChoice) {    
    color = colorChoice;

}

function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")

}