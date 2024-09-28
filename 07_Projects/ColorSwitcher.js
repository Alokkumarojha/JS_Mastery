const btn = document.querySelectorAll(".button");

const container = document.querySelector(".container");
btn.forEach(function (buttons) {
  // console.log(buttons);
  buttons.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target.id);
    if (e.target.id === "maroon") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      // dark is not working
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      container.style.backgroundColor = e.target.id;
    }
  });
});
