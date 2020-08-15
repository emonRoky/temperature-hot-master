const inputCity = document.getElementById('inputValue');
const cityName = document.getElementById('city');
const tempture = document.getElementById('temp');
const lead = document.getElementById('lead');
document.getElementById('submit-btn').addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputCity.value +'&units=metric &appid=386c6e15e1f6810a33cf871e428b0e43')
    .then(response => response.json())
    .then(data =>{
        const city_name = data['name'];
        const temp = data['main']['temp'];
        const temp_celcius = Math.floor(temp - 273.15);
        const weather = data['weather'][0]['main'];

        cityName.innerText = city_name;
        tempture.innerText = temp_celcius;
        lead.innerText = weather;
        inputCity.value = "";
    })
    .catch(error => alert("Wrong city name"));

});
