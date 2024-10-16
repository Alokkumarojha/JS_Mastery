// Quiz questions and answers
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correct: "JavaScript",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Leo Tolstoy",
      "William Shakespeare",
      "Mark Twain",
      "J.K. Rowling",
    ],
    correct: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2", "CO2", "H2O"],
    correct: "H2O",
  },
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

// Function to display the quiz questions
function loadQuiz() {
  quizData.forEach((quizItem, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const questionText = document.createElement("h3");
    questionText.innerText = `${index + 1}. ${quizItem.question}`;

    const optionsList = document.createElement("ul");

    quizItem.options.forEach((option) => {
      const optionElement = document.createElement("li");
      optionElement.innerHTML = `
        <input type="radio" name="question${index}" value="${option}">
        ${option}
      `;
      optionsList.appendChild(optionElement);
    });

    questionElement.appendChild(questionText);
    questionElement.appendChild(optionsList);
    quizContainer.appendChild(questionElement);
  });
}

// Function to calculate the score
function calculateScore() {
  let score = 0;

  quizData.forEach((quizItem, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption && selectedOption.value === quizItem.correct) {
      score++;
    }
  });

  resultContainer.innerText = `Your score: ${score}/${quizData.length}`;
}

// Load the quiz when the page is ready
loadQuiz();

// Add event listener to the submit button
submitBtn.addEventListener("click", calculateScore);
