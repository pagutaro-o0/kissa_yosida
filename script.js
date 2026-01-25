const images = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg"
];

const slides = document.querySelectorAll(".slide");
let index = 0;
const interval = 4000;

function changeSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index = (index + 1) % images.length;

  setTimeout(changeSlide, interval);
}

changeSlide();

const words = [
  "今日は少し苦めが美味しいです",
  "雨の日は深煎りが合います",
  "プリンはコーヒーとセットで",
  "この店の豆は42年変えてません",
  "時間を、淹れています",
  "静けさも、味のうち",
  "今日は、少し苦め",
  "豆は正直ですね"
];

const random = Math.floor(Math.random() * words.length);
document.getElementById("masterWord").textContent = "「" + words[random] + "」";

