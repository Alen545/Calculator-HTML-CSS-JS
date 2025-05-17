//toggle button
function ToggleEvent() {
  const section = document.querySelector(".calculator-section");
  section.classList.toggle("dark-mode");
}

let expression = "";

const readSection = document.getElementById("read-section");
const answerSection = document.getElementById("answer-section");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value"); // get the button's value

    switch (value) {
      case "Clear":
        expression = "";
        break;

      case "=":
        try {
          expression = eval(expression).toString();
        } catch {
          expression = "Error";
        }
        break;

      case "backspace":
        expression = expression.slice(0, -1);
        break;

      default:
        if (expression === "Error") expression = "";

        expression += value;
    }
    //display 
    readSection.textContent = expression;

    if (
      !["Clear", "=", "backspace"].includes(value) &&
      expression !== "Error"
    ) {
      try {
        answerSection.textContent = eval(expression);
      } catch {
        answerSection.textContent = "";
      }
    } else {
      answerSection.textContent = "";
    }
  });
});
