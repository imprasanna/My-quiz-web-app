const quizData = [
    {
        question: "Who is the present president of USA?",
        a: "Donald Trump",
        b: "Barack Obama",
        c: "Joe Biden",
        d: "George W. Bush",
        correct: "opt3"
    },
    {
        question: "Which is the longest river of the world?",
        a: "Nile",
        b: "Amazon",
        c: "Mississippi river",
        d: "Jordan river",
        correct: "opt1"
    },
    {
        question: "Who was the winner of 2018 FIFA World Cup?",
        a: "Argentina",
        b: "France",
        c: "Germany",
        d: "Brazil",
        correct: "opt2"
    },
    {
        question: "Who build Eiffel Tower?",
        a: "Alexander Eiffel",
        b: "Nelson Eiffel",
        c: "Robert Eiffel",
        d: "William Eiffel",
        correct: "opt1"
    },
    {
        question: "Which is the highest mountain peak of the world?",
        a: "Mt. Everest",
        b: "Mt. Kanchanjungha",
        c: "Mt. K2",
        d: "Mt. Killimanjaro",
        correct: "opt1"
    },
    {
        question: "Who is the present CEO of Google?",
        a: "Larry Page",
        b: "Tim Cook",
        c: "Satya Nadella",
        d: "Sundar Pichai",
        correct: "opt4"
    }
];

const questionElement = document.getElementById("question");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.getElementById("submit-btn");

const answers = document.querySelectorAll(".answer");
let currentQuestionNum = 0;
let score = 0;
const showScore = document.getElementById("finalScore");
const hideQuizContainer = document.getElementById("quiz-box");

loadQuiz();

function loadQuiz() {
    deselectOptions();
    const currentQuestion = quizData[currentQuestionNum];

    questionElement.innerHTML = currentQuestion.question;
    aText.innerHTML = currentQuestion.a;
    bText.innerHTML = currentQuestion.b;
    cText.innerHTML = currentQuestion.c;
    dText.innerHTML = currentQuestion.d;
}

submitBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
    const checkedAnswer = getAnswerChecked();
    console.log(checkedAnswer);
    if (checkedAnswer === quizData[currentQuestionNum].correct) {
        score++;
    }

    currentQuestionNum++;

    if (currentQuestionNum < quizData.length) {
        loadQuiz();
    }

    else {
        showScore.innerHTML =
        `<h3 class="score-text">Your score is ${score}/${quizData.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showScore.style.cssText = "display:block"
        hideQuizContainer.style.display = "none";
    }
}

function getAnswerChecked() {
    let ans;

    answers.forEach((currentAnsElement) => {
        if (currentAnsElement.checked) {
            ans = currentAnsElement.id;
        }
    });
    return ans;
}

function deselectOptions() {
    answers.forEach((currentAnsElement) => {
        currentAnsElement.checked = false;
    });
}