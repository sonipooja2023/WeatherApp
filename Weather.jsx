
import axios from 'axios';
import React,  { useState, useEffect } from 'react' ;

function Weather() {

const [data,setData] = useState({});
  const [location,setLocation]=useState("");
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={api-key}`;
   const searchLocation=((event)=>{
   if(event.key==='Enter'){
  axios.get(url)
  .then(function (response) {
    console.log(response.data);
    setData(response.data);
  })
  .catch(function (error) { 
    console.log(error);
  })
  setLocation("");
}
});

  return(
<div className="app">
 <div className='container'>
  <div className='weather-top'>
    <div className='search-location'>
       <input id="enter-location" type='text' value={location} onChange={event=>setLocation(event.target.value)} onKeyDown={searchLocation} placeholder='Enter Location'/>
    </div>
  </div>
  <div className='weather-main'>
    <div className='location'>
       <p>{data.name}</p>
    </div>
    <div className='temp'>
       {data.main ? <p>{Math.floor(data.main.temp)-273}°</p> : null}     
    </div>
    <div className='details'>
      {data.weather ? <p>{data.weather[0].main}</p> : null}
    </div>
   </div>
  <div className='weather-bottom'>
    <div className='day-weather'>
    {data.main ? <p>High  {Math.floor(data.main.temp_max)-273}°</p> : null}    
    </div>
    <div className='night-weather'>
    {data.main ? <p>Low  {Math.floor(data.main.temp_min)-273}°</p> : null}    
    </div>
    <div className='humidity-weather'>
    {data.main ? <p>Humidity  {data.main.humidity}%</p> : null}    
    </div>
    <div className='feels-weather'>
    {data.main ? <p>Feels like  {Math.floor(data.main.feels_like)-273}°</p> : null}  
  </div>
  </div>
 </div>
</div> 

  )
    
}
export default Weather;  