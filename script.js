// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '35817151a9mshdaff00af77b00bbp1fdb09jsncbfa27f5f680',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Parse the response as JSON

//         // Access the nested properties inside the 'result' object
//         cloud_pct.innerHTML = result.weather.cloud_pct;
//         temp.innerHTML = result.weather.temp;
//         feels_like.innerHTML = result.weather.feels_like;
//         humidity.innerHTML = result.weather.humidity;
//         min_temp.innerHTML = result.weather.min_temp;
//         max_temp.innerHTML = result.weather.max_temp;
//         wind_speed.innerHTML = result.weather.wind_speed;
//         wind_degrees.innerHTML = result.weather.wind_degrees;
//         sunrise.innerHTML = result.weather.sunrise;
//         sunset.innerHTML = result.weather.sunset;
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();




// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '35817151a9mshdaff00af77b00bbp1fdb09jsncbfa27f5f680',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
//     cloud_pct.innerHTML = result.weather.cloud_pct;
//     temp.innerHTML = result.weather.temp;
//     feels_like.innerHTML = result.weather.feels_like;
//     humidity.innerHTML = result.weather.humidity;
//     min_temp.innerHTML = result.weather.min_temp;
//     max_temp.innerHTML = result.weather.max_temp;
//     wind_speed.innerHTML = result.weather.wind_speed;
//     wind_degrees.innerHTML = result.weather.wind_degrees;
//     sunrise.innerHTML = result.weather.sunrise;
//     sunset.innerHTML = result.weather.sunset;
// } catch (error) {
// 	console.error(error);
// }


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '35817151a9mshdaff00af77b00bbp1fdb09jsncbfa27f5f680',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};





const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())

        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;


            const isFloodWarning = generateFloodWarning(response.cloud_pct, response.humidity);
            displayFloodWarning(isFloodWarning)


        })


        .catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("London")




















