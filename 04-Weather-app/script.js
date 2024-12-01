const apiKey = "8a99f47917476b10349349b68fe32ff3"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector(".input-group input")
const button = document.querySelector(".btn")
const img = document.querySelector(".cloudsimg")

async function checkwheather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    let data = await response.json()
    // console.log(data)
    if(response.status == 404){
        alert('please enter a vaild city name')
    }else{
        document.querySelector(".cityname").innerHTML = data.name
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`
        document.querySelector(".hum").innerHTML = `${data.main.humidity}%`
        document.querySelector(".speed").innerHTML = `${data.wind.speed}km/h`
    
    
        if(data.weather[0].main == "Clouds"){
            img.src = "img/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            img.src = "img/clear.png"
        }else if(data.weather[0].main == "Drizzle"){
            img.src = "img/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            img.src = "img/mist.png"
        }else if(data.weather[0].main == "Rain"){
            img.src = "img/rain.png"
        }
    
        document.querySelector(".main").style.display = "block";
    }
    }


button.addEventListener("click", ()=>{
    checkwheather(search.value);
})

