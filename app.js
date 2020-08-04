const weather = new Weather(weatherLocation.city,weatherLocation.state)
const ui = new UI;
const storage = new localStorage()
const weatherLocation = storage.getLocationData()

getWeather = () => {
  weather.getWeather().then(result =>{
    ui.paint(result)
  })
  .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded',getWeather)
document.getElementById('w-change-btn').addEventListener('click',(e) =>{
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  weather.changeLocation(city,state)
  storage.setLocationData(city,state)
  getWeather()
  $('#locModal').modal('hide')
})