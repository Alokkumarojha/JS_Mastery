const form = document.querySelector("form");
//this use case give you empty value.
// const heigth = parseInt(document.querySelector("#height").value)
form.addEventListener("submit", function (e) {
  e.preventDefault(); // jaha par hame natural behaviar change karna hoga dom ya element ka.
  const heigth = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  // parseInt => chenge the value of string to integer type
  const results = document.querySelector("#results");

  if (heigth === "" || heigth < 0 || isNaN(heigth)) {
    results.innerHTML = `Plz give a valid heigth ${heigth}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Plz give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((heigth * heigth) / 10000)).toFixed(2);
    let classification = "";
    if (bmi <= 18.5) {
      classification = "under weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      classification = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      classification = "Over Weight";
    } else {
      classification = "Obese";
    }
    // show the result
    results.innerHTML = `<spam>${bmi} - ${classification}</spam>`;
  }
});
