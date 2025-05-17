function ToggleEvent() {
  const section = document.querySelector(".calculator");
  section.classList.toggle("dark-mode");
}

let expression = "";
const readSection = document.getElementById("read-section");
const answerSection = document.getElementById("answer-section");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    switch (value) {
      case "Clear":
        expression = "";
        break;
      case "=":
        try {
          expression = Function('"use strict";return (' + expression + ')')();
          expression = String(expression);
        } catch {
          expression = "Error";
        }
        break;
      case "backspace":
        expression = expression.substring(0, expression.length - 1);
        break;
      default:
        if (expression === "Error") expression = "";
        expression += value;
    }

    readSection.textContent = expression;

    if (!["Clear", "=", "backspace"].includes(value) && expression !== "Error") {
      try {
        const result = Function('"use strict";return (' + expression + ')')();
        answerSection.textContent = result;
      } catch {
        answerSection.textContent = "";
      }
    } else {
      answerSection.textContent = "";
    }
  });
});
