console.log("Hello");
const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    // jokeContainer.classList.remove("fade");
    fetch(url)
        .then(data => data.json())

        .then(item => {
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        })
    // .then(item => console.log(item.joke))

}
btn.addEventListener("click", getJoke)
// getJoke()