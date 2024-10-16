const city = document.getElementById("city");
const temp = document.getElementById("temp");
const type = document.getElementById("type");
const img = document.getElementById("img");

const APIkey = "34b03623fa6d278978d870a4969841d7";
const data = async function (search) {
  if (!search) {
    alert("Please enter a city name");
    return;
  }

  try {
    let getData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}`
    );

    if (!getData.ok) {
      throw new Error("City not found");
    }

    let jsonData = await getData.json();
    console.log(jsonData);

    // Update the DOM with the fetched data
    city.textContent = jsonData.name;
    temp.textContent = `${Math.round(jsonData.main.temp - 273.15)}°C`; // Convert from Kelvin to Celsius
    type.textContent = jsonData.weather[0].description;
    img.src = `http://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`;
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

function myFun() {
  const input = document.getElementById("userInput"); // Get the input inside the function
  const search = input.value.trim(); // Get the value and trim any whitespace

  if (search) {
    data(search); // Call the data function with the search term
  } else {
    alert("Please enter a valid city name");
  }
}
