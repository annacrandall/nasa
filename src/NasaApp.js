import { useEffect, useState } from "react";
import Picture from "./components/Picture";
const apiKey = process.env.REACT_APP_API_KEY 

const NasaApp = () => { 
  const [apiData, setApiData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`)
        const data = await res.json()
      setApiData(data)
      console.log(data)
    }
    fetchData()
  }, [])
  return (
    <div id="app-container">
      <div id="photo-container">
          <Picture apiData={apiData} />
         </div>
    </div>
  );
}

export default NasaApp;