import dino from "./assets/images/website-dinosaur.png";
import "./assets/css/main.css";

const img = document.querySelector(".img");
img.src = "https://picsum.photos/200";
fetch("https://picsum.photos/200").then(function (response) {
  //img.src = response.url;
});
