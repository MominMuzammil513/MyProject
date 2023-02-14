function forgFunc() {
    let email = document.querySelector('#forget-input').value;
    console.log(typeof email);
    let emailError = document.querySelector('#forgot-error');

    if (!isNaN(email)) {
        console.log('It is a number')
        if (email.length == 10) {
            console.log("good luck");
            emailError.innerHTML = '✅';
            // emailError.style.color = 'green';
        } else {
            console.log("not good");
            emailError.innerHTML = '⛔️';
            // emailError.style.color = 'red';

        }
    } else if (email.includes('@')) {
        if (email.includes('.')) {
            emailError.innerHTML = '✅';
            // emailError.style.color = 'green';
        } else {
            emailError.innerHTML = '⛔️';
            // emailError.style.color = 'red';
        }
    } else if (email == '') {
        emailError.innerHTML = '⛔️';
        // emailError.style.color = 'red'
    } else {
        emailError.innerHTML = '⛔️';
        // emailError.style.color = 'red';
    }
}


