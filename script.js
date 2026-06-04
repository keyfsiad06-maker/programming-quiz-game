// Questions stored in an array
// Quiz Questions
const questions = [
    {
        question: "Which language is primarily used for web page interactivity?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Which programming language is known for data science and machine learning?",
        choices: ["Python", "HTML", "CSS", "PHP"],
        answer: "Python"
    },
    {
        question: "Which language is used to style web pages?",
        choices: ["Java", "C#", "CSS", "Ruby"],
        answer: "CSS"
    },
    {
        question: "Which of these is NOT a programming language?",
        choices: ["Python", "Java", "HTML", "C++"],
        answer: "HTML"
    },
    {
        question: "Which language was developed by Microsoft?",
        choices: ["Ruby", "C#", "PHP", "Swift"],
        answer: "C#"
    },
    {
        question: "Which language is commonly used for Android app development?",
        choices: ["Kotlin", "PHP", "Ruby", "SQL"],
        answer: "Kotlin"
    },
    {
        question: "Which language is famous for iOS app development?",
        choices: ["Swift", "Java", "Python", "Go"],
        answer: "Swift"
    },
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is often used for server-side web development?",
        choices: ["PHP", "CSS", "HTML", "Figma"],
        answer: "PHP"
    },
    {
        question: "Which language is created by Google and known for its simplicity?",
        choices: ["Go", "Perl", "Ruby", "Pascal"],
        answer: "Go"
    }
];

// Game Object
const gameData = {
    score: 0,
    currentQuestion: 0
};

// Elements
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("questionNumber");

// Load Question
function loadQuestion() {
    const current = questions[gameData.currentQuestion];

    questionElement.textContent = current.question;

    questionNumberElement.textContent =
        `Question ${gameData.currentQuestion + 1} of ${questions.length}`;

    answerButtons.forEach((button, index) => {
        button.textContent = current.choices[index];

        button.onclick = () => {
            checkAnswer(current.choices[index]);
        };
    });
}

// Check Answer
function checkAnswer(selectedAnswer) {
    const correctAnswer =
        questions[gameData.currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        gameData.score++;
    } else {
        // Wrong answer
    }

    scoreElement.textContent =
        `Score: ${gameData.score}`;

    gameData.currentQuestion++;

    if (gameData.currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Final Results
function showResults() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    let message = "";

    if (gameData.score === questions.length) {
        message = `🏆 Perfect Score! ${gameData.score}/${questions.length}`;
    }
    else if (gameData.score >= 8) {
        message = `🎉 Excellent! ${gameData.score}/${questions.length}`;
    }
    else if (gameData.score >= 5) {
        message = `👍 Good Job! ${gameData.score}/${questions.length}`;
    }
    else {
        message = `📚 Keep Practicing! ${gameData.score}/${questions.length}`;
    }

    document.getElementById("finalMessage").textContent = message;
}

// Restart Quiz
function restartQuiz() {
    gameData.score = 0;
    gameData.currentQuestion = 0;

    scoreElement.textContent = "Score: 0";

    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    loadQuestion();
}

// Start Quiz
loadQuestion();