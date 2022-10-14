import 'flowbite';
import { useEffect, useState } from "react";
import Picture from "./components/Picture";
const apiKey = process.env.REACT_APP_API_KEY;

const NasaApp = () => {
  const [apiData, setApiData] = useState([]);
  <script src="../path/to/flowbite/dist/flowbite.js"></script>

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
      <header className="m-2 p-1 text-center font-1 text-lg">
        <h1>NASA Astronomy Photo of the Day</h1>
        <p>Powered by NASA</p>
      </header>
      <div className="grid grid-cols-1 sm:grid grid-cols-2 font-1" id="content-container">
        <div id="photo-container" className="w-1/1 m-1">
          <Picture apiData={apiData} />
        </div>
        <div className="border-2 border-stone-700 rounded m-2 text-center">
          <details className="border-2 border-stone-700 m-1 p-4 rounded">
            <summary>Image Information</summary>
            <p>Copyright: {apiData.copyright}</p>
            <p>Date Taken: {apiData.date}</p>
          </details>
          <details className="border-2 border-stone-700 m-1 p-4 rounded">
            <summary>Photo Explanation</summary>
            <p className="m-1 p-1 overflow-clip tracking-wide">{apiData.explanation}</p>
          </details>
        </div>
      </div>

    </div>
  );
}

export default NasaApp;