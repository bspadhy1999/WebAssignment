var city=document.getElementById("city");
var conditions=document.getElementById("conditions");
var temperature=document.getElementById("temperature");
var windspeed=document.getElementById("windspeed");
var textInput=document.getElementById("textInput");
var main=document.getElementById("main");
if(textInput.value===""){
    main.style.display="none";
}
function checkWeather(){
    main.style.display="block";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+textInput.value+'&appid=3a31505446781c155adf1743bdbddb8a').then(function(res){
        return res.json();
    },function(err){
        console.log("Error in fetching Api!");
    }).then(function(actualData){
        city.innerHTML=actualData.name;
        conditions.innerHTML=actualData.weather[0].description;
        temperature.innerHTML=`${parseInt(actualData.main.temp-273.15).toFixed(2)}° C`;
        windspeed.innerHTML=`${actualData.wind.speed} km/h`;
        
    },function(){
        console.log("Error in iterate Data!")
    });
}
