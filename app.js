const API_KEY = `1baa8d0a34e0b10b97427734adc48def`;

const searchTemp=()=>{
    const getCityNameText = document.getElementById('city_name_input_field');
    const getCityNameValue = getCityNameText.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getCityNameValue}&appid=${API_KEY}&units=metric`;
    getCityNameText.value = '';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data))
}
// .then(data=>( data.cod===200 ? displayTemp(data) : alert('Enter your city name')));
const getDivIdAndSetValue =(id, dataValue)=>{
    document.getElementById(id).innerText = dataValue;
}

const displayTemp =(tamp)=>{
    getDivIdAndSetValue('city_name', tamp.name);
    getDivIdAndSetValue('city_tamp', tamp.main.temp);
    getDivIdAndSetValue('city_feels_like_tamp', tamp.main.feels_like);
    getDivIdAndSetValue('weather_status', tamp.weather[0].main);
    // set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${tamp.weather[0].icon}@2x.png`;
    const showCityWeatherStatusIcon = document.getElementById('weather_icon');
    showCityWeatherStatusIcon.setAttribute('src',iconUrl)

}