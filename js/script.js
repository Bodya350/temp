"use strict"

// FETCH


fetch('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))




// Kharkiv

let list0 = document.querySelector('.weather__list');
list0.addEventListener('change', function () {
   
   if(this.value == 'Kharkiv') {
fetch('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=93289809585caed120f1d2c0dce91655')

.then(Response => Response.json())
.then((data) => {
   console.log(data)
   document.querySelector('.weather__city').innerHTML = data.name;
   document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
   document.querySelector('.weather__view').innerHTML = data.weather[0].description;
   document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;
   
})

.catch(error => console.log(error))
}
})


// Los Angeles 


let list5 = document.querySelector('.weather__list');
list5.addEventListener('change', function () {
   
   if(this.value == 'Los Angeles') {

   fetch('https://api.openweathermap.org/data/2.5/weather?id=5368361&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/weather_few_clouds.png"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))
}
})
// Berlin
let list = document.querySelector('.weather__list');
list.addEventListener('change', function () {
   
   if(this.value == 'Berlin') {

   fetch('https://api.openweathermap.org/data/2.5/weather?id=2950158&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))
}
})

//Kiev

let list1 = document.querySelector('.weather__list');
list1.addEventListener('change', function () {
   
   if(this.value == 'Kiev') {

   fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))
}
})

//Dubai

let list2 = document.querySelector('.weather__list');
list2.addEventListener('change', function () {
   
   if(this.value == 'Dubai') {

   fetch('https://api.openweathermap.org/data/2.5/weather?id=292223&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/weather_clear.png"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))
}
})

// London

let list3 = document.querySelector('.weather__list');
list3.addEventListener('change', function () {
   
   if(this.value == 'London') {

   fetch('https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/weather_overcast.png"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))
}
})

// New York 


let list4 = document.querySelector('.weather__list');
list4.addEventListener('change', function () {
   
   if(this.value == 'New York') {

   fetch('https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=93289809585caed120f1d2c0dce91655')
   .then(Response => Response.json())
   .then((data) => {
      console.log(data)
      document.querySelector('.weather__city').innerHTML = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
      document.querySelector('.weather__view').innerHTML = data.weather[0].description;
      document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;

      
   })
   
   .catch(error => console.log(error))
}
})





// ASYNC/AWAIT

// async function fn (){
//    const a = await fetch('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=93289809585caed120f1d2c0dce91655')
//    const data = await a.json()
//    console.log(data)
   
//       document.querySelector('.weather__city').innerHTML = data.name;
//       document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
//       document.querySelector('.weather__view').innerHTML = data.weather[0].description;
//       document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;
      
// }
// fn()

// let list0 = document.querySelector('.weather__list');
// list0.addEventListener('change', function () {
   
//    if(this.value == 'Kharkiv') {
      
//       async function fn1 (){
//       const a = await fetch('https://api.openweathermap.org/data/2.5/weather?id=706483&appid=93289809585caed120f1d2c0dce91655')
//       const data = await a.json()
//       console.log(data)
      
//          document.querySelector('.weather__city').innerHTML = data.name;
//          document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
//          document.querySelector('.weather__view').innerHTML = data.weather[0].description;
//          document.querySelector('.weather__feature').innerHTML = `<img src="img/reshot-icon-weather-VAUPX2QFJK.svg"${data.weather[0].icon}>`;
      
//       }

//       fn1()
//    }        
// })






