const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];

//unsplash api
const count = 10;
const apiKey = "dbJ50AxMaFONXAG6GseDhs7aEMwXuf2TyoJxzsgiI-A";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//display photos
function displayPhotos() {
  photoArray.forEach((photo) => {
    //create <a> element
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //create <img> element
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    // console.log(photoArray);
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

getPhotos();
