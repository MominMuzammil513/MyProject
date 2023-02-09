console.log("hi.........................");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#row-2");
// const sounds = document.querySelector("#btn2");
const btn = document.querySelector("#btn1");

btn.addEventListener("click", () => {
    let inpWord = document.querySelector("#text").value;
    console.log(inpWord);
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)


            result.innerHTML = `<hr>
            <h3>${inpWord}</h3>
            <button id="btn2" onclick="playSound()">sound
            </button>
            <hr>
            <br>
            <hr>
            <div id="sentence">
                <span id="span-text">${data[0].meanings[0].partOfSpeech}</span>
                <span id="span-text2">/${data[0].phonetic}/</span>
            </div>
            <hr>
            <br>
            <hr>
            <div id="Meaning-text"><strong>Definitions :</strong>
            <hr>
                <span id="mean-text">${data[0].meanings[0].definitions[0].definition || ""}</span>
            <hr>
                <span id="mean-text">${data[0].meanings[0].definitions[1].definition || ""}</span>
            <hr>
                <span id="mean-text">${data[0].meanings[0].definitions[2].definition || ""}</span>
            <hr>
                <span id="mean-text">${data[0].meanings[0].definitions[3].definition || ""}</span>
            <hr>
            </div>
            <hr>
            <br>
            <hr>
            <hr>
            <div id="Definiion"><strong>Examples :</strong>
            <hr>
                <span id="difinition-text">${data[0].meanings[0].definitions[0].example || ""}</span>
            <hr>
                <span id="difinition-text">${data[0].meanings[0].definitions[1].example || ""}</span>
            <hr>
                <span id="difinition-text">${data[0].meanings[0].definitions[2].example || ""}</span>
            <hr>
                <span id="difinition-text">${data[0].meanings[0].definitions[3].example || ""}</span>
            <hr>
                <span id="difinition-text">${data[0].meanings[0].definitions[4].example || ""}</span>
            <hr>

                
            </div>
            <hr>`
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`) || sound.setAttribute("src", `${data[0].phonetics[1].audio}`)
            console.log(sound);

        });
});
function playSound() {
    sound.play();
}
