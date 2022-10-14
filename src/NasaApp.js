import { useEffect, useState } from "react";
const apiKey = process.env.API_KEY;  

const NasaApp = () => { 
  const [apiData, setApiData] = useState(null); 

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
            <div>
          {apiData === null ? <p>loading</p> : <img alt="APOD">{apiData}</img>}
            </div>
    </div>
  );
}

export default NasaApp;