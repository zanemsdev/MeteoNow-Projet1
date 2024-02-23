//Initialisation Donnée 

//->>>> A PASSER SOUS DOTENV <------

const KEY = '';

// Lors du démarrage de l'app
let Url = `https://api.openweathermap.org/data/2.5/weather?q=Vannes&appid=${KEY}&units=metric&lang=fr`
fetch(Url).then(response => response.json().then((data) => {
    console.log(data)

    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#temp').innerHTML = data.main.temp + '°C'
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h'

}))



//Recherche
function SendFetch() {
    let InputValue = document.getElementById("inputCity").value
    let InputUrl = `https://api.openweathermap.org/data/2.5/weather?q=${InputValue}&appid=${KEY}&units=metric&lang=fr`
    fetch(InputUrl).then(response => response.json().then((data) => {
        console.log(data)

        document.querySelector('#city').innerHTML = data.name
        document.querySelector('#temp').innerHTML = data.main.temp + '°C'
        document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h'


    })
)}






