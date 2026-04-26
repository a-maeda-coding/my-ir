'use strict'

let lastIndex = -1;
let speechTimer;

function petRabbit() {
  const speech = document.getElementById("speech");

  const messages = [
    "🐰 なでてくれてありがとう🩷",
    "💌 今日もえらいよ〜✨",
    "🌷 無理しすぎないでね☁️",
    "🐰 ちゃんと休憩もしてね🫧",
    "✨ その調子その調子っ",
    "💭 焦らなくて大丈夫だよ〜"
  ];

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * messages.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  speech.innerHTML = messages[randomIndex];
  speech.classList.add("show");

  clearTimeout(speechTimer);

  speechTimer = setTimeout(function () {
    speech.classList.remove("show");
  }, 3000);
}