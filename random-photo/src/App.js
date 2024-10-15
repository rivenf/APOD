import "./App.css";

async function getPhoto() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
  );
  const dataArray = await res.json();
  const data = dataArray[0];
}

function App() {
  return (
    <div className="app">
      <img src={data.url} alt={data.title} class="bgImg" />

      <div className="container">
        <h1>Get A Random Astronomy Photo</h1>
        {/* <div class="loader" id="loader"></div> */}
        <h2>{data.title}</h2>
        <p className="caption">{data.explanation}</p>
        <p className="copy">{data.copyright}</p>
        <p className="copy">{data.date}</p>
        <button className="btn" onClick={getPhoto}>
          Get Another Photo
        </button>
      </div>
    </div>
  );
}

export default App;
