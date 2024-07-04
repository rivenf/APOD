/* Get elements */
const photoTitle = document.getElementById('photoTitle');
const photo = document.getElementById('photo');
const caption = document.getElementById('caption');
const copy = document.getElementById('copy');
const date = document.getElementById('date');
const picBtn = document.getElementById('picBtn');
const loader = document.getElementById('loader');
const innerContainer = document.getElementById('innerContainer');

/* Show and hide loader */
function showLoader(){
  loader.hidden = false;
  innerContainer.hidden = true;
}
function hideLoader(){
  loader.hidden = true;
  innerContainer.hidden = false;
}

/* Get photo from APOD API and show on page */
async function getPhoto() {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1');
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
    copy.innerHTML = '';
  } else {
    copy.innerHTML = '&copy ' + data.copyright;
  };
  hideLoader();
}

getPhoto();
picBtn.addEventListener('click', getPhoto);
