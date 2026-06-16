let apiKey = '2c78a75bc1f09bfd2ec05da99d76278f';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric';

//&appid=2c78a75bc1f09bfd2ec05da99d76278  &q=bangaluru

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  let data = await response.json()
  console.log(data)
  }
  checkWeather()