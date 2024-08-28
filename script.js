window.addEventListener("DOMContentLoaded", FetchData);

const AdviceTitle= document.querySelector("#ad-id");
const AdviceBody = document.querySelector("#ad-body");
const dice = document.querySelector("#dice")

async function FetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();
  console.log(json);
  AdviceTitle.innerText = ` Advice ${json.slip.id}`
  AdviceBody.innerText = `:${json.slip.advice}`;
}
dice.addEventListener("click", FetchData)
