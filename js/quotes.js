const quotes = [
  { quote: "세번 참으면 호구된다.", author: "Great Park" },
  { quote: "늦었다고 할 때가 정말 늦었다.", author: "Great Park" },
  { quote: "감사의 표시는 돈으로 하라.", author: "Great Park" },
  { quote: "노력하지 않은 자는 기회조차 안옵니다.", author: "Great Park" },
  { quote: "티끌 모아 티끌", author: "Great Park" },
  { quote: "일찍 일어나는 새가 피곤하다.", author: "Great Park" },
  { quote: "먹는 것이 곧 행복이다.", author: "Kate" },
  { quote: "즐길 수 없으면 피해라.", author: "Great Park" },
  { quote: "가는 말이 고우면 얕본다.", author: "Great Park" },
  { quote: "내가 좋아하고 잘하는 일을 하자.", author: "DrawEndrew" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
