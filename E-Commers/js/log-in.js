
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }

// };
function emailFun() {
    let email = document.querySelector('#login-mail').value;
    console.log(typeof email);
    let emailError = document.querySelector('#phone-error');

    if (!isNaN(email)) {
        console.log('It is a number')
        if (email.length == 10) {
            console.log("good luck");
            emailError.innerHTML = 'Good !';
            emailError.style.color = 'green';
        } else {
            console.log("not good");
            emailError.innerHTML = 'Please enter valid Email ID/Mobile number';
            emailError.style.color = 'red';

        }
    } else if (email.includes('@')) {
        if (email.includes('.')) {
            emailError.innerHTML = 'Good !';
            emailError.style.color = 'green';
        } else {
            emailError.innerHTML = 'Please enter valid Email ID/Mobile number';
            emailError.style.color = 'red';
        }
    } else if (email == '') {
        emailError.innerHTML = 'Enter E-mail or Mobile Number';
        emailError.style.color = 'red'
    } else {
        emailError.innerHTML = 'Please enter valid Email ID/Mobile number';
        emailError.style.color = 'red';
    }
}

function passFunc() {
    let pass = document.querySelector('#login-pass').value;
    let passError = document.querySelector('#pass-error');
    let word = 'Muzammil@413'
    if (word == pass) {
        passError.innerHTML = '';
        // passError.style.color = 'green';

    } else {
        passError.innerHTML = 'Invalid Password';
        passError.style.color = 'red';

    }


}
