import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const faqContainer = document.querySelector(".FAQ");
let qnaContainer;

// HELPER FUNCTIONS
function toggleClass(cssClass, element) {
  element.classList.toggle(cssClass);
}

function querySelectElement(element) {
  return qnaContainer.querySelector(element);
}

// EVENT LISTENER CALLBACK FUNCTION
function handleQuestionClick(e) {
  // REVEAL ANSWER
  qnaContainer = e.target.closest(".FAQ__QnA-container");
  if (!qnaContainer) return;
  const questionContainer = e.target.closest(".FAQ__question-container");
  if (!questionContainer) return;
  const answer = querySelectElement(".FAQ__answer");
  toggleClass("hidden", answer);

  // MAKE THE QUESTION BOLD
  const question = querySelectElement(".FAQ__question");
  toggleClass("bold", question);

  // ROTATE ARROW ICON
  const arrowIcon = querySelectElement(".FAQ__QnA-container__icon");
  toggleClass("rotate", arrowIcon);
}

// EVENT LISTENER
faqContainer.addEventListener("click", handleQuestionClick);
