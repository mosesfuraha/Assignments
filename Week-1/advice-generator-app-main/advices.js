"use-strict";

const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  document.getElementById("text").textContent = `"${data.slip.advice}"`;
  document.getElementById("advice-id").textContent = `Advice #${data.slip.id}`;
};

fetchAdvice();
