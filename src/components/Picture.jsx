const Picture = ({apiData}) => {
    return (
        <div>
            {apiData.media_type === "image" ?
                    <img src={apiData.url} alt="" className="md:h-96 md:w-auto rounded-md shadow-md border-2 object-contain" onClick={() => {
                        window.location.href = apiData.url
                    }}></img>
                    : <p>Data not loading.</p>}
 
        </div>
    )
}
export default Picture; 
