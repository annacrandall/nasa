import { useEffect, useState } from "react";
const apiKey = process.env.API_KEY;  

const NasaApp = () => { 
  const [apiData, setApiData] = useState(null); 
  const [cityName, setCityName] = useState("Des Moines"); 


  const handleCityInput = (event) => {
    setCityName(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`)
        const data = await res.json()
        setApiData(data)
    }
    fetchData()
  }, [])
  return (
    <div id="app-container">
      <h1>Weather App</h1>
      <div id="search-container">
        <h2>Input city: </h2>
        <input id="search-box" type="text" value={cityName} onChange={handleCityInput}
          placeholder="Enter city name here..."></input>
        <button id="search-submit-button" >Search</button>
      </div>
      
          <div id="weather-container">
              <h4>Live Weather Condition</h4>
            <div >
          {apiData === null ? <p>loading</p> : <img alt="APOD">{apiData}</img>}
            
            </div>
        </div>
        
    </div>
  );
}

export default NasaApp;