import "./App.css";

/* old code:

// Show and hide loader
function showLoader() {
  loader.hidden = false;
  innerContainer.hidden = true;
}
function hideLoader() {
  loader.hidden = true;
  innerContainer.hidden = false;
}

//Get photo from APOD API and show on page
async function getPhoto() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
  );
  const dataArray = await res.json();
  const data = dataArray[0];

  //console.log(data)
  showLoader();
  photoTitle.innerHTML = data.title;
  photo.src = data.url;
  photo.alt = data.title;
  caption.innerHTML = data.explanation;
  date.innerHTML = data.date;
  if (data.copyright == undefined) {
    copy.innerHTML = "";
  } else {
    copy.innerHTML = "&copy " + data.copyright;
  }
  hideLoader();
}

getPhoto();
picBtn.addEventListener("click", getPhoto); */

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
        <button className="btn">Get Another Photo</button>
      </div>
    </div>
  );
}

export default App;
