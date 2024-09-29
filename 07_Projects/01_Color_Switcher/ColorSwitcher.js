const btn = document.querySelectorAll(".button");

const container = document.querySelector(".container");
btn.forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
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
    // if (e.target.id === "yellow") {
    //   container.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "white") {
    //   container.style.backgroundColor = e.target.id;
    // }

    ///  we can use switch also.
    switch (e.target.id) {
      case "white":
        container.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        container.style.backgroundColor = e.target.id;
        break;
      default:
        text = "No value found";
    }
  });
});
