import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPhoto() {
      setIsLoading(true);
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
      );
      const data = await res.json();
      setPhoto(data[0]);
      setIsLoading(false);
    }
    getPhoto();
  }, []);

  return (
    <div className="app">
      <img src={photo.url} alt={photo.title} class="bgImg" />
      {isLoading ? (
        <div class="loader" id="loader"></div>
      ) : (
        <div className="container">
          <h1>Get A Random Astronomy Photo</h1>
          <h2>{photo.title}</h2>
          <p className="caption">{photo.explanation}</p>
          <p className="copy">{photo.copyright}</p>
          <p className="copy">{photo.date}</p>
          <button className="btn">Get Another Photo</button>
        </div>
      )}
    </div>
  );
}

export default App;
