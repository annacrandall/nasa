import { useEffect, useState } from "react";
import Picture from "./components/Picture";
const apiKey = process.env.REACT_APP_API_KEY;

const NasaApp = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`
      );
      const data = await res.json();
      setApiData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div id="app-container font-1">
      <header className="m-2 p-1 text-center font-1 text-lg">
        <h1>NASA Astronomy Photo of the Day</h1>
        <p>Powered by NASA</p>
      </header>
      <div id="content-container" className="grid grid-cols-1 sm:grid-cols-2">
        <div id="photo-container" className="w-1/1 m-1 drop-shadow">
          <Picture apiData={apiData} />
        </div>
        <div id="info-container" className="text-center tracking-wide">
          <div className="border-4 border-stone-700 m-2" id="info-border">
          <details className="border-2 border-stone-700 m-1 p-4 rounded">
            <summary>Image Information</summary>
            <p>Copyright: {apiData.copyright}</p>
            <p>Date Taken: {apiData.date}</p>
          </details>
          <details className="border-2 border-stone-700 m-1 p-4 rounded">
            <summary>Photo Explanation</summary>
            <p className="m-1 p-1 overflow-clip">
              {apiData.explanation}
              </p>
            </details>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NasaApp;
