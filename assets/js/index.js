let button = $('button');
let inputVal = $('input');
let name = $('#city-name');
let temp = $('#temp');
let conSym = $('#conditions > h1');
let conTxt = $('#conditions > small');
let humidity = $('#humidity');
let windSpeed = $('#wind-speed');

button.click(function () {
    console.log(inputVal.val());
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputVal.val() + '&appid=69fba91ce292d176b758f3484e7119f3&units=metric')
        .then(response => response.json())
        .then(data => {
            let nameVal = data.name;
            let tempVal = parseInt(data.main.temp);
            let desSymUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            let newhtml = "<img src=" + desSymUrl + ">";
            let desTxt = data.weather[0].description;
            let hum = data.main.humidity;
            let wind = data.wind.speed;
            name.text(nameVal);
            temp.text(tempVal + '\u00b0');
            conSym.html(newhtml);
            conTxt.text(desTxt);
            humidity.html(hum + "%");
            windSpeed.html(wind + "km/hr");
        })

        .catch(err => alert(err))
});

