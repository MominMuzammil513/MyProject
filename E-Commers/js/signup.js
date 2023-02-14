
// let signupData = () => {




let confirm = document.querySelector('#confirm-input').value;


function nameFunc() {
    let nameE = document.querySelector('#name-input').value;
    console.log(nameE);
    let nameError = document.querySelector("#name-error");
    let symbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let numbers = /[0-9]/g;

    if (nameE == '') {
        console.log('please enter any name');
        nameError.innerHTML = 'please enter any name';
        nameError.style.color = 'red';
    }
    else if (symbol.test(nameE)) {
        console.log('invalide name given syyyyyyyyyyymbol');
        nameError.innerHTML = 'please do not enter symbol'
        nameError.style.color = 'red';
    } else if (numbers.test(nameE)) {
        console.log('invalid name given Nummmmmber');
        nameError.innerHTML = 'please do not enter number'
        nameError.style.color = 'red';
    }
    else {
        console.log('valid name is given');
        nameError.innerHTML = '✅';
        // nameError.style.color = '✅';
    }
}

function emailFunc() {
    let email = document.querySelector('#email-input').value;
    let emailError = document.querySelector("#email-error");
    if (email == '') {
        emailError.innerHTML = 'please enter email address';
        emailError.style.color = 'red';

    } else if (email.includes('@')) {
        if (email.includes('.')) {
            emailError.innerHTML = '✅';
            // emailError.style.color = 'green';
        } else {
            emailError.innerHTML = 'Please enter valid Email ID/Mobile number';
            emailError.style.color = 'red';
        }
    } else {
        emailError.innerHTML = 'Please enter valid Email ID/Mobile number';
        emailError.style.color = 'red';
    }
}
function numFunc() {
    let mobile = document.querySelector('#mobile-input').value;
    let emailError = document.querySelector("#mobile-error");
    if (!isNaN(mobile)) {
        console.log('It is a number')
        if (mobile.length == 10) {
            console.log("good luck");
            emailError.innerHTML = '✅';
            // emailError.style.color = 'green';
        } else {
            console.log("not good");
            emailError.innerHTML = 'Please enter valid Mobile number';
            emailError.style.color = 'red';

        }

    } else {
        console.log("not good");
        emailError.innerHTML = 'Please enter valid Mobile number';
        emailError.style.color = 'red';
    }
}

function passFunc() {
    let pass = document.querySelector('#pass-input').value;
    let passError = document.querySelector("#pass-error");
    let ul = document.querySelector('#pass-ul');
    let lower = document.querySelector('#lower');
    let upper = document.querySelector('#upper');
    let num = document.querySelector('#num');
    let atLaest = document.querySelector('#char');
    let symbol = document.querySelector('#special-char');

    let checkNumber = /[0-9]/g;
    let checkUpper = /[A-Z]/g;
    let checkLower = /[a-z]/g;
    let checkSymbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


    if (checkNumber.test(pass)) {
        num.style.display = 'none';
    } else {
        num.style.display = 'block';
    }
    if (checkLower.test(pass)) {
        lower.style.display = 'none';
    } else {
        lower.style.display = 'block';
    }
    if (checkUpper.test(pass)) {
        upper.style.display = 'none';
    } else {
        upper.style.display = 'block';
    }
    if (checkSymbol.test(pass)) {
        symbol.style.display = 'none';
    } else {
        symbol.style.display = 'block';
    }
    if (pass.length >= 8) {
        atLaest.style.display = 'none';
    } else {
        atLaest.style.display = 'block';
    }


}
function conFunc() {
    let pass = document.querySelector('#pass-input').value;
    let confirm = document.querySelector('#confirm-input').value;

    let conError = document.querySelector('#confirm-error')
    if (pass == confirm) {
        conError.innerHTML = '✅';
    } else {
        conError.innerHTML = 'please enter same password';
        conError.style.color = 'red';
    }
}
