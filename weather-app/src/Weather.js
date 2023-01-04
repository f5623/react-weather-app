import React from "react"
import { useState } from "react"
import axios from "axios"
import Current from "./current"

export default function Weather(){
    let [city , setCity] = useState("oslo")
    let [inf, setInf] = useState(null);
    let [imgSrc,setImgSrc] = useState(null)

    function handleCityInput(event){
        event.preventDefault()
        setCity(event.target.value)
    }
 function handleResponse(response){
    let currentTemp = Math.round(response.data.temperature.current);
    // console.log(response)
    let windSpeed = response.data.wind.speed;
    let humidity = response.data.temperature.humidity;
    let weatherDesc = response.data.condition.description
    setImgSrc(`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`) ;
    setInf({city, currentTemp, imgSrc , windSpeed, humidity,weatherDesc });
 }


    function handleSubmit(event){
        event.preventDefault()
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=7386080a2f6318d17ebb9t1f5453o70f`;
        axios.get(apiUrl).then(handleResponse);    
      }
    return(
    <div className="search-box">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 city-input"
            type="search"
            placeholder="Search for a city"
            aria-label="Search"
            onChange={handleCityInput}
          />
          <button
            className="btn btn-outline-danger btn-light search-button"
            type="submit"
          >
            Search
          </button>
        </form>
        <Current input={inf} />

      </div>
)
}