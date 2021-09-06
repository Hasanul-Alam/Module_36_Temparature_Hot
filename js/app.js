const API_key = `5aa32b817f652d0fada173874205f876`;
const searchTemperature = () => {
    const location = document.getElementById('city-name').value;
    //Clear input field
    document.getElementById('city-name').value = '';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}
const displayTemparature = temp => {
    console.log(temp);
    const city = document.getElementById('city');
    city.innerText = temp.name;
    const condition = document.getElementById('condition');
    condition.innerText = temp.weather[0].main;
    const temperature = document.getElementById('temperature');
    temperature.innerText = temp.main.temp;
    const imageUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', imageUrl);
}
