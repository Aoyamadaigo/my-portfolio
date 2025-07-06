import './style.css';

// JavaScriptで数秒ごとに背景画像を変更する
const images = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg'];
let current = 0;
setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById('hero-image').src = `.../images/${images[current]}`;
}, 6000);