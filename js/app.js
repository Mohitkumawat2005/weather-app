const searchbox = document.querySelector("#search-box");
const weatherbox = document.querySelector("#weather-box");
const bgVideo = document.querySelector("#bg-video"); 

searchbox.addEventListener("keyup", async (e) => {
    if (e.key == "Enter") {
        weatherbox.innerHTML = `<div class="loader-wrapper" id="loader">
             <div class="loader"></div>
           </div>
         `;

        const cityname = e.target.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;
        console.log(url);

        const response = await fetch(url);
        if (response.status == 200) {
            const data = await response.json();
            weatherbox.innerHTML = `
                  <div class="card">
           <div class="row">
            <div class="col-4">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
               </div>
               <div class="col-8">
                   <h1> ${data.main.temp} ℃</h1>
                   <h2> ${data.weather[0].main}</h2>
                   <h3> ${data.wind.speed}</h3>
               </div>
           </div>
           </div>`;

            if (data.main.temp > 0 && data.main.temp <20) {
                bgVideo.src = "img/1858244-uhd_4096_2160_24fps.mp4";
            } 
            else if (data.main.temp > 20 && data.main.temp <30) {
                bgVideo.src = "img/1858244-uhd_4096_2160_24fps.mp4";
            } 
            else if (data.main.temp > 30 && data.main.temp <35){
                bgVideo.src = "img/4763824-uhd_3840_2160_24fps.mp4";
            }
            else if (data.main.temp > 35 && data.main.temp <38){
                bgVideo.src = "img/4377027-uhd_3840_2160_24fps.mp4";
            }
            else if (data.main.temp > 38 && data.main.temp <40){
                bgVideo.src = "img/3343679-hd_1920_1080_30fps.mp4";
            }
            else if (data.main.temp > 40 && data.main.temp <50){
                bgVideo.src = "img/6092628-uhd_2160_3840_30fps.mp4";
            }
            else {
                bgVideo.src = "img/3571264-uhd_3840_2160_30fps (1).mp4";
            }
            
        } else if (response.status == 404) {
            weatherbox.innerHTML = `<h3> City Not Found </h3>`;
        }
    }
});
