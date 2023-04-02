

// let weaTher = {
//     apiKey: "256b030ad41189bed826cf98d32a1e0a",
//     fetchData: (city) => {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q=" + "pune" + "&appid=256b030ad41189bed826cf98d32a1e0a&units=metric"
//         )
//             .then((response) => response.json())
//             .then((data) => this.displayWeather(data))
//     },
//     displayWeather: function (data) {
//         const { name } = data
//         const { icon, desription } = data.weather
//         const { temp, humidity } = data.main
//         const { speed } = data.wind
//         console.log(name, icon, desription, temp, humidity, speed);
//     },
// }


const btn = document.querySelector(".search-btn")


btn.addEventListener('click', () => {
    console.log("You have clicked me")
    const fetData = async () => {
        const searchInput = document.querySelector(".input-search").value;
        // console.log(searchInput);


        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=256b030ad41189bed826cf98d32a1e0a&units=metric`
        const response = await fetch(url)
        const jsonData = await response.json()
        console.log(jsonData);
        document.querySelector(".degree").innerHTML = `<svg stroke="currentColor" class="cloud-svg" fill="currentColor" stroke-width="0" version="1.2"
        baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 19h-11c-2.206 0-4-1.794-4-4 0-1.861 1.277-3.429 3.001-3.874l-.001-.126c0-3.309 2.691-6 6-6 2.587 0 4.824 1.638 5.65 4.015 2.942-.246 5.35 2.113 5.35 4.985 0 2.757-2.243 5-5 5zm-11.095-6.006c-1.008.006-1.905.903-1.905 2.006s.897 2 2 2h11c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.243 0-.5.041-.81.13l-1.075.307-.186-1.103c-.325-1.932-1.977-3.334-3.929-3.334-2.206 0-4 1.794-4 4 0 .272.027.545.082.811l.244 1.199-1.421-.016z">
        </path>
    </svg>
    <h1 class="temp">${jsonData.main.temp}&#8451;</h1>`
        document.querySelector(".min").innerHTML = `min: ${jsonData.main.temp_min}&#8451;`
        document.querySelector(".max").innerHTML = `max: ${jsonData.main.temp_max}&#8451;`
        // main
        // console.log(jsonData.main.temp);
        // console.log(jsonData.main.feels_like);
        // console.log(jsonData.main.temp_min);
        // console.log(jsonData.main.temp_max);
        // console.log(jsonData.main.pressure);
        // console.log(jsonData.main.sea_level);
        // console.log(jsonData.main.grnd_level);

        // //wind 
        // console.log(jsonData.wind.speed);
        // console.log(jsonData.wind.deg);
        // console.log(jsonData.wind.gust);

        // //weather
        // console.log(jsonData.weather[0].description);
        // console.log(jsonData.weather[0].icon);





    }
    fetData()

})