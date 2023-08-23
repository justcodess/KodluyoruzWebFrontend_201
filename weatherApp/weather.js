
const apiKey = "e5e0845e3c0682a3bdf739a1d9d1fde7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";




async function checkWeather(city){
    const response =  await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    // document.querySelector(".city").innerHTML=data.name;
    // document.querySelector(".per").innerHTML=data.wind.speed + "km/H";
    // document.querySelector(".speed").innerHTML=data.main.humidity + "%";
    // document.querySelector(".temp").innerHTML=Math.round(data.main.temp.value) + "°C";
}


   document.querySelector(".btn").addEventListener("click", () => {
    let city = document.querySelector(".searchBox").value;
    checkWeather(city);
    document.querySelector(".searchBox").value = " ";
});

document.querySelector(".searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".btn").click();
    }
});

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      console.log("Latitude: " + latitude + " Longitude: " + longitude);
  
      // Konumu kullanarak yapmak istediğiniz işlemleri burada yapabilirsiniz
    });
  } else {
    console.log("Geolocation is not available on this browser.");
  }