const Picture = ({ apiData }) => {
  return (
    <div className="m-1" id="">
      {apiData.media_type === "image" ? (
        <img
          src={apiData.url}
          alt="NASA APOD"
          onClick={() => {
            window.location.href = apiData.url;
          }}
        ></img>
      ) : (
        <p className="text-center">Where's the data?</p>
      )}
    </div>
  );
};
export default Picture;
