let apiKey = '2c78a75bc1f09bfd2ec05da99d76278f';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

 async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  let data = await response.json()
    console.log(data)

   document.querySelector('.city').innerHTML = data.name ;
   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
   document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
   document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h"


   //work tommorrow
// if (data.weather[0].main === 'clear'){
//   weatherIcon.src = 'images/clear.png'
// }else if (data.weather[0].main === 'clouds'){
//   weatherIcon.src = 'images/clouds.png'
//     console.log('hi')

// }else if (data.weather[0].main === 'drizzle'){
//   weatherIcon.src = 'images/drizzle.png'
// }else if (data.weather[0].main === 'rain'){
//   weatherIcon.src = 'images/rain.png'
// }else if (data.weather[0].main === 'snow'){
//   weatherIcon.src = 'images/snow.png'
// }else if (data.weather[0].main === 'mist'){
//   weatherIcon.src = 'images/mist.png'
// }else{
//   console.log('hi')
// }

  
  }
  
  searchBtn.addEventListener('click',()=>{
    console.log(searchBox.value)
      checkWeather(searchBox.value)
  })
  
 //bengaluru