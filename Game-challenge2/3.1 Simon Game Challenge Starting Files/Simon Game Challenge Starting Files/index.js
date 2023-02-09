// const message = document.querySelector("#level-title");
// const greenBtn = document.querySelector("#green");
// const redBtn = document.querySelector("#red");
// const yellowBtn = document.querySelector("#yellow");
// const blueBtn = document.querySelector("#blue");
// const btnLength = document.querySelectorAll(".btn").length;

// // greenBtn.addEventListener("click", () => {
// //     console.log('You are clicked Me!!!!!');
// //     console.log(this);
// // })

// for (let i = 0;i < btnLength;i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", () => {
//         console.log("your are clicked me ...........");
//         console.log(this);
//     })
// }

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(() => {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {

    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

let checkAnswer = (currentLevel) => {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}


let nextSequence = () => {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

let animatePress = (currentColor) => {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

let playSound = (name) => {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

let startOver = () => {
    level = 0;
    gamePattern = [];
    started = false;
}