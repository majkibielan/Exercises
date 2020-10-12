var numberOfSquares = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var infoBoard = document.getElementById("info");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    colorDisplay.textContent = pickedColor;
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        //ad click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                infoBoard.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "PLAY AGAIN?";
            } else {
                this.style.backgroundColor = "#232323";
                infoBoard.textContent = "Try Again!";
            }
        });
    }
}

function setupModeButtons() {
    //mode buttons event listener
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function reset() {
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW GAME";
    infoBoard.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}

