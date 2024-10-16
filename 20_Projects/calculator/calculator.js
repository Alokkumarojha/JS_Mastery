const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtns = document.querySelector(".clear");

let currentValue = "";
console.log(`currentValue is ${currentValue}`);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.value;

    if (value === "=") {
      try {
        currentValue = eval(currentValue);
        display.value = currentValue;
        console.log(`currentValue is ${display.value}`);
      } catch (error) {
        display.value = "Error.";
        currentValue = "";
      }
    } else {
      currentValue += value;
      display.value = currentValue;
    }
  });
});

function clearDisplay() {
  currentValue = "";
  display.value = "";
}

clearBtns.addEventListener("click", clearDisplay);
