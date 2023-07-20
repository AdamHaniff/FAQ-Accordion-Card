import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const faqContainer = document.querySelector(".FAQ");

// WHEN THE QUESTION CONTAINER IS CLICKED,
// REMOVE THE HIDDEN CLASS FROM THE ANSWER;
// MAKE THE QUESTION BOLD
// ROTATE THE ARROW ICON

// EVENT LISTENER
faqContainer.addEventListener("click", function (e) {
  const question = e.target.closest(".FAQ__QnA-container");
  if (!question) return;
  const answer = question.querySelector(".FAQ__answer");
  answer.classList.toggle("hidden");
});
