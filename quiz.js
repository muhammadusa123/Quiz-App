const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Elephant", correct: true },
            { text: "Lion", correct: false },
            { text: "Donkey", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Antarctica", correct: false },
            { text: "Sahara", correct: false },
            { text: "Mediterranean", correct: true },
            { text: "K2", correct: false },
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answers: [
            { text: "UAE", correct: false },
            { text: "USA", correct: false },
            { text: "Pakistan", correct: false },
            { text: "Iran", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; // Hide next button initially
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("opt");
        button.onclick = () => selectAnswer(answer, button); // Pass the button reference
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none"; // Hide next button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Clear previous answers
    }
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        score++;
    }
    // Disable all buttons after an answer is selected
    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true; // Disable all answer buttons
    });
    nextButton.style.display = "block"; // Show next button
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButtons.innerHTML = ''; // Clear answer buttons
    nextButton.style.display = 'none'; // Hide next button
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}); // Add event listener to next button

startQuiz(); // Start the quiz on page load
