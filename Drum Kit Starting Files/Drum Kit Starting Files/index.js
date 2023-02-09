// document.querySelector('button').addEventListener('click', btnclick)
// function btnclick() {
//     alert('clicked me');
// }

//..................................

// document.querySelector('button').addEventListener('click', function btnclick() {
//     alert('clicked me');
// })

//....................Start...................


// const drumLength = document.querySelectorAll('.drum').length;
// console.log(drumLength)
// for (i = 0;i < drumLength;i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {

//         // console.log(this);
//         // let audioW = new Audio('sounds/tom-1.mp3')
//         // let audioA = new Audio('sounds/tom-2.mp3')
//         // let audioS = new Audio('sounds/tom-3.mp3')
//         // let audioD = new Audio('sounds/tom-4.mp3')
//         // let audioJ = new Audio('sounds/snare.mp3')
//         // let audioK = new Audio('sounds/crash.mp3')
//         // let audioL = new Audio('sounds/kick-bass.mp3')
//         // audioW.play(i);
//         // audioA.play(i);
//         let buttonInnerHTML = this.innerHTML;

//         makeSound(buttonInnerHTML);

//         buttonAnimation(buttonInnerHTML);
//         this.style.color = 'white';

//     })
// }

// document.addEventListener("keypress", function (event) {

//     makeSound(event.key);

//     buttonAnimation(event.key);

// });

// function makeSound(key) {

//     switch (key) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;

//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;

//         case "s":
//             var tom3 = new Audio('sounds/tom-3.mp3');
//             tom3.play();
//             break;

//         case "d":
//             var tom4 = new Audio('sounds/tom-4.mp3');
//             tom4.play();
//             break;

//         case "j":
//             var snare = new Audio('sounds/snare.mp3');
//             snare.play();
//             break;

//         case "k":
//             var crash = new Audio('sounds/crash.mp3');
//             crash.play();
//             break;

//         case "l":
//             var kick = new Audio('sounds/kick-bass.mp3');
//             kick.play();
//             break;


//         default: console.log(key);

//     }
// }
// function buttonAnimation(currentKey) {

//     var activeButton = document.querySelector("." + currentKey);

//     activeButton.classList.add("pressed");

//     setTimeout(function () {
//         activeButton.classList.remove("pressed");
//     }, 50);

// }





//.......................Stop...............................

// JavaScript Drum Kit App

// {
// 	const playingClass = 'playing',
// 		crashRide = document.getElementById('crash-ride'),
// 		hiHatTop = document.getElementById('hihat-top');

// 	const animateCrashOrRide = () => {
// 		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
// 	};

// 	const animateHiHatClosed = () => {
// 		hiHatTop.style.top = '171px';
// 	};

// 	const playSound = e => {
// 		const keyCode = e.keyCode,
// 			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

// 		if(!keyElement) return;

// 		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
// 		audioElement.currentTime = 0;
// 		audioElement.play();

// 		switch(keyCode) {
// 			case 69:
// 			case 82:
// 				animateCrashOrRide();
// 				break;
// 			case 75:
// 				animateHiHatClosed();
// 				break;
// 		}

// 		keyElement.classList.add(playingClass);
// 	};

// 	const removeCrashRideTransition = e => {
// 		if(e.propertyName !== 'transform') return;

// 		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
// 	};

// 	const removeHiHatTopTransition = e => {
// 		if(e.propertyName !== 'top') return;

// 		e.target.style.top = '166px';
// 	};	

// 	const removeKeyTransition = e => {
// 		if(e.propertyName !== 'transform') return;

// 		e.target.classList.remove(playingClass)
// 	};

// 	const drumKeys = Array.from(document.querySelectorAll('.key'));

// 	drumKeys.forEach(key => {
// 		key.addEventListener('transitionend', removeKeyTransition);
// 	});

// 	crashRide.addEventListener('transitionend', removeCrashRideTransition);
// 	hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

// 	window.addEventListener('keydown', playSound);
// }

const btnLength = document.querySelectorAll('.drum').length;

for (let i = 0;i < btnLength;i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function (abc) {
        // console.log('You are clicked Me!!!!!');
        // console.log(this);
        let pressKey = this.innerHTML;
        makeAdio(pressKey);
        animationKeyPress(pressKey);


    })
}


let makeAdio = (even) => {
    switch (even) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log("Your are click wrong key");

    }

}

// let makeKey = (keypress) =>{}

document.addEventListener('keypress', (e) => {
    makeAdio(e.key);
    animationKeyPress(e.key);

})

let animationKeyPress = (currentKey) => {
    let btnAnimation = document.querySelector("." + currentKey);
    btnAnimation.classList.add('pressed');

    setTimeout(() => {
        btnAnimation.classList.remove('pressed')
    }, 50);
}






















