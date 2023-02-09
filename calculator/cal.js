let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerHTML;
        console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == 'Ac') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else if (screenValue == buttonText) {
            screenValue = '';

        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
