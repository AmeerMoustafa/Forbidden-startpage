
// Initial API call
const getWeather = async () => {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.8938&lon=35.5018&appid=ae4ec71132439c75dd1c70bc0edf353e&units=metric")
    const weather = await res.json()
    return weather
}

//regex to return the first number from the API's weather condition ID
const conditionChecker = async() => {
    const weather = await getWeather()
    const re = new RegExp(/\d/)
    const weatherCondition = weather.weather[0].id.toString()
    const firstInt = weatherCondition.match(re).toString()
    return firstInt
}


//Displays a different FontAwesome Icon on night/day rain/shine
const displayWeather = async () => {
    weather = await getWeather()
    weatherCondition = await conditionChecker()
    const date = new Date
    hours = date.getHours()
    if(hours >= 18 || hours <= 6){
        document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-moon"></i> <span>${weather.main.temp}°</span>`

        if(weatherCondition == 2 || weatherCondition == 3 || weatherCondition == 5) {
            document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-cloud-moon-rain"></i> <span>${weather.main.temp}°</span>`
        }

    } 
    
    else {
        document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-sun"></i> <span>${weather.main.temp}°</span>`
        if(weatherCondition === 2 || weatherCondition === 3 || weatherCondition === 5) {
            document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i> <span>${weather.main.temp}°</span>`
        }
    }
}

displayWeather()