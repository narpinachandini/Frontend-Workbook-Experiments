const form = document.querySelector('#weather-form');
const statusNode = document.querySelector('#status');
const current = document.querySelector('#current');
const forecast = document.querySelector('#forecast');
const icons = {0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'🌨️',73:'❄️',75:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',95:'⛈️',96:'⛈️',99:'⛈️'};
const descriptions = {0:'Clear sky',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Fog',48:'Depositing rime fog',51:'Light drizzle',53:'Drizzle',55:'Dense drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',71:'Light snow',73:'Snow',75:'Heavy snow',80:'Rain showers',81:'Rain showers',82:'Heavy rain showers',95:'Thunderstorm',96:'Thunderstorm with hail',99:'Thunderstorm with hail'};
async function getJSON(url){const response=await fetch(url);if(!response.ok)throw new Error('The weather service returned an error. Please try again.');return response.json();}
form.addEventListener('submit',async event=>{
  event.preventDefault();const city=document.querySelector('#city').value.trim();if(!city)return;
  statusNode.textContent='Finding location and loading weather…';current.hidden=true;forecast.hidden=true;
  try{
    const geo=await getJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    if(!geo.results?.length)throw new Error('City not found. Check the spelling and try again.');
    const loc=geo.results[0];
    const data=await getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`);
    document.querySelector('#place').textContent=`${loc.name}${loc.admin1?`, ${loc.admin1}`:''}, ${loc.country}`;
    document.querySelector('#description').textContent=descriptions[data.current.weather_code]||'Current conditions';
    document.querySelector('#temperature').textContent=`${Math.round(data.current.temperature_2m)}°C`;
    document.querySelector('#feels').textContent=`Feels like ${Math.round(data.current.apparent_temperature)}°C · Humidity ${data.current.relative_humidity_2m}% · Wind ${Math.round(data.current.wind_speed_10m)} km/h`;
    document.querySelector('#weather-icon').textContent=icons[data.current.weather_code]||'🌡️';
    const days=data.daily.time.map((date,i)=>({date,code:data.daily.weather_code[i],max:data.daily.temperature_2m_max[i],min:data.daily.temperature_2m_min[i]}));
    document.querySelector('#forecast-grid').innerHTML=days.map(d=>`<article class="day"><p>${new Date(d.date+'T12:00:00').toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</p><span>${icons[d.code]||'🌡️'}</span><strong>${Math.round(d.max)}° / ${Math.round(d.min)}°</strong><p>${descriptions[d.code]||'Conditions'}</p></article>`).join('');
    current.hidden=false;forecast.hidden=false;statusNode.textContent='Weather updated successfully.';
  }catch(error){statusNode.textContent=error.message||'Could not load weather. Check your internet connection.';}
});
