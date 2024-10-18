// Array of questions
let data = [
  {
    Q: "What is the purpose of the 'this' keyword in JavaScript?",
    A: "To define a variable",
    B: "To create a function",
    C: "To refer to the current object",
    D: "To create a new object",
    ans: "ans3", // Correct answer is 'C', mapped to the radio button 'ans3'
  },
  {
    Q: "What is the difference between '==' and '===' in JavaScript?",
    A: "There is no difference.",
    B: "'==' checks for value, '===' checks for value and type equality.",
    C: "'==' checks for value and type, '===' checks for value only.",
    D: "'==' is strict equality, '===' is loose equality.",
    ans: "ans2", // Correct answer is 'B', mapped to the radio button 'ans2'
  },
  {
    Q: "What is the purpose of async/await syntax in JavaScript?",
    A: "To define asynchronous functions",
    B: "To create synchronous functions",
    C: "To handle errors in JavaScript",
    D: "To create objects in JavaScript",
    ans: "ans1", // Correct answer is 'A', mapped to the radio button 'ans1'
  },
  {
    Q: "What is the correct answer to this code? 2 % 2 === 0",
    A: "true",
    B: "false",
    C: "Undefined",
    D: "NaN",
    ans: "ans1", // Correct answer is 'true', mapped to 'ans1'
  },
];

// DOM Elements
let question = document.getElementById("qusn");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let answers = document.querySelectorAll(".option");
let myScore = document.querySelector(".myScore");

let num = 0;
let score = 0;

// Load the current question
function loadQuestion() {
  question.innerHTML = data[num].Q;
  option1.innerHTML = data[num].A;
  option2.innerHTML = data[num].B;
  option3.innerHTML = data[num].C;
  option4.innerHTML = data[num].D;
}

// Check the selected answer
function checkAns() {
  let ans;
  answers.forEach((currElement) => {
    if (currElement.checked) {
      ans = currElement.id;
      currElement.checked = false; // Uncheck after selection for the next question
    }
  });
  return ans;
}

// Load the next question
function next() {
  let checkedAns = checkAns();
  if (checkedAns === data[num].ans) {
    score++;
  }
  num++;
  if (num < data.length) {
    loadQuestion();
  } else {
    myScore.innerHTML = `Your score is ${score} / ${data.length} <br/>
    <button onclick="location.reload()">Play again</button>`;
    nextBtn.style.display = "none";
  }
}

// Initial load
loadQuestion();

// // Quiz questions and answers
// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     correct: "Paris",
//   },
//   {
//     question: "Which language is used for web development?",
//     options: ["Python", "C++", "JavaScript", "Java"],
//     correct: "JavaScript",
//   },
//   {
//     question: "Who wrote 'Hamlet'?",
//     options: [
//       "Leo Tolstoy",
//       "William Shakespeare",
//       "Mark Twain",
//       "J.K. Rowling",
//     ],
//     correct: "William Shakespeare",
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     options: ["O2", "H2", "CO2", "H2O"],
//     correct: "H2O",
//   },
// ];

// const quizContainer = document.getElementById("quiz");
// const submitBtn = document.getElementById("submit-btn");
// const resultContainer = document.getElementById("result");

// // Function to display the quiz questions
// function loadQuiz() {
//   quizData.forEach((quizItem, index) => {
//     const questionElement = document.createElement("div");
//     questionElement.classList.add("question");

//     const questionText = document.createElement("h3");
//     questionText.innerText = `${index + 1}. ${quizItem.question}`;

//     const optionsList = document.createElement("ul");

//     quizItem.options.forEach((option) => {
//       const optionElement = document.createElement("li");
//       optionElement.innerHTML = `
//         <input type="radio" name="question${index}" value="${option}">
//         ${option}
//       `;
//       optionsList.appendChild(optionElement);
//     });

//     questionElement.appendChild(questionText);
//     questionElement.appendChild(optionsList);
//     quizContainer.appendChild(questionElement);
//   });
// }

// // Function to calculate the score
// function calculateScore() {
//   let score = 0;

//   quizData.forEach((quizItem, index) => {
//     const selectedOption = document.querySelector(
//       `input[name="question${index}"]:checked`
//     );
//     if (selectedOption && selectedOption.value === quizItem.correct) {
//       score++;
//     }
//   });

//   resultContainer.innerText = `Your score: ${score}/${quizData.length}`;
// }

// // Load the quiz when the page is ready
// loadQuiz();

// // Add event listener to the submit button
// submitBtn.addEventListener("click", calculateScore);
