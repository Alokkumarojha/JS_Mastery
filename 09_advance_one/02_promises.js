// Create promises

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB call, network call,  Cryptopraphy
  setTimeout(function () {
    console.log("I have creating promises");
    resolve(); // resolve connected
  }, 1000);
});
// consume promises
promiseOne.then(function () {
  // resolve has connection with .then()
  console.log("promises consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve(); // we can pass parameters in resolve . ex -  object or array or func.etc
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "Alok", lastName: "Ojha", Email: "alok@example.com" });
  }, 3000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promisFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "AlokOjha", password: "1234" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 4000);
});
promisFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promises is either resoleved or rejected."); // finally execute hoga hi goga
  });

const promisFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "12345" });
    } else {
      reject("Error: js went wrong");
    }
  }, 5000);
});
async function consumePromiseFive() {
  try {
    const response = await promisFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/Alokkumarojha");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: E", error);
//   }
// }
// getUser();

fetch("https://api.github.com/users/Alokkumarojha")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // this is called chainable or thenable
    console.log(data);
  });
