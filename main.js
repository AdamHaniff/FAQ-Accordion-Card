import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const faqContainer = document.querySelector(".FAQ");
const colorTextBold = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-text-bold");
const fontWeightRegular = getComputedStyle(
  document.documentElement
).getPropertyValue("--font-weight-regular");
const fontWeightBold = getComputedStyle(
  document.documentElement
).getPropertyValue("--font-weight-bold");
const colorQuestion = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-question");

// ROTATE THE ARROW ICON

// EVENT LISTENER
faqContainer.addEventListener("click", function (e) {
  const qnaContainer = e.target.closest(".FAQ__QnA-container");
  if (!qnaContainer) return;
  const answer = qnaContainer.querySelector(".FAQ__answer");
  answer.classList.toggle("hidden");

  // MAKE THE QUESTION BOLD
  const question = qnaContainer.querySelector(".FAQ__question");

  if (question.style.fontWeight === fontWeightBold) {
    question.style.fontWeight = fontWeightRegular;
    question.style.color = colorQuestion;
  } else {
    question.style.fontWeight = fontWeightBold;
    question.style.color = colorTextBold;
    // WE COULD TOGGLE A CLASS HERE
  }

  // ROTATE ARROW ICON
  const arrowIcon = qnaContainer.querySelector(".FAQ__QnA-container__icon");
  if (arrowIcon.style.transform === "rotate(180deg)") {
    arrowIcon.style.transform = "rotate(0)";
  } else {
    arrowIcon.style.transform = "rotate(180deg)";
  }
  // WE COULD TOGGLE A CLASS HERE AS WELL
});
