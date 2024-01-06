import React, { useState } from "react";
import "./WeatherApp.css";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {
    const [icon,setIcon]=useState(cloud_icon)
     let api_key = "8cb7090cbdc231a7db45e35f261f3a17";
    const Search = async () =>{
      let element = document.getElementsByClassName('cityInput')
      console.log(element)
      if(element[0].value === "")
      {return 0;}
      console.log(element[0].value)
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
      let response = await fetch(url)
      let data = await response.json()
      const humidity = document.getElementsByClassName('humidity-percent')
      const wind = document.getElementsByClassName("wind-rate")
      const temperature = document.getElementsByClassName("weather-temperature")
      const location = document.getElementsByClassName("weather-location")
      humidity[0].innerHTML = data.main.humidity + "%"
      wind[0].innerHTML = data.wind.speed + "Km/h"
      temperature[0].innerHTML = Math.floor(data.main.temp) + "°C"
      location[0].innerHTML = data.name
      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
        setIcon(clear_icon)
      }
      else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
        setIcon(cloud_icon)
      }
      else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
        setIcon(drizzle_icon)
      }
      else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
        setIcon(drizzle_icon)
      }
      else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
        setIcon(rain_icon)
      }
      else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
        setIcon(rain_icon)
      }
      else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
        setIcon(snow_icon)
      }
      else {
        setIcon(clear_icon)
      }
    }
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search City"
          className="cityInput"
        ></input>
        <div className="search-icon">
          <img src={search_icon} alt="search-icon" onClick={()=>{
            Search()
          }}/>
        </div>
      </div>
      <div className="weather-image">
        <img src={icon} alt=""/>
      </div>
      <div className="weather-temperature">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} className="icon" alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} className="icon" alt="" />
          <div className="data">
            <div className="wind-rate">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
