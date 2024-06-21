"use-strict";

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    document.getElementById(
      "text"
    ).innerHTML = `&ldquo; ${data.slip.advice} &ldquo;`;
    document.getElementById(
      "advice-id"
    ).textContent = ` Advice ${data.slip.id} `;
  } catch (error) {
    console.log(`Failed to get advices ${error}`);
  }
};

fetchAdvice();
