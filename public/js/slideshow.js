// Album cover slideshow

let i = 0;
let albums = [];
let time = 1000;
albums.push("../assets/albums/Album_1.png");
albums.push("../assets/albums/Album_2.png");
albums.push("../assets/albums/Album_3.jpg");
albums.push("../assets/albums/Album_4.jpg");
albums.push("../assets/albums/Album_5.png");
albums.push("../assets/albums/Album_6.jpg");

function changeAlbum() {
  slides = document.getElementById("albumSlide");

  slides.src = albums[i];

  if (i < albums.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeAlbum()", time);
}

var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}
