//unsplash api
const count = 10;
const apiKey = "dbJ50AxMaFONXAG6GseDhs7aEMwXuf2TyoJxzsgiI-A";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Get photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPhotos();
