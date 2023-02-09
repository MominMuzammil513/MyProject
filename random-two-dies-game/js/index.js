
function meFunc() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);
    console.log(randomNumber2);


    //player 1
    let image1 = "img/die-" + randomNumber1 + ".png";
    let playerImg1 = document.querySelectorAll('img')[0];
    console.log(playerImg1);
    playerImg1.setAttribute("src", image1);
    //................

    //player2
    let image2 = "img/die-" + randomNumber2 + ".png";
    let playerImg2 = document.querySelectorAll('img')[1];
    console.log(playerImg2);
    playerImg2.setAttribute("src", image2);
    //..................

    if (randomNumber1 === randomNumber2) {
        document.querySelector('#win-msg').innerHTML = '&#9785; Draw!';
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector('#win-msg').innerHTML = '&#9812; Player1 Winner';
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('#win-msg').innerHTML = '&#9812; Player2 Winner';
    }
}