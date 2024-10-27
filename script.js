const questions = [
    { question: "Colosseumul a fost construit în anul 70 d.Hr.", answer: true },
    { question: "Colosseumul a fost folosit exclusiv pentru lupte de gladiatori.", answer: false },
    { question: "Colosseumul are o capacitate de aproximativ 50.000 de spectatori.", answer: true },
];

let currentQuestion = 0;

function startQuiz() {
    document.getElementById("quiz").style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("result").style.display = "none";
        document.getElementById("question").innerText = questions[currentQuestion].question;
    } else {
        document.getElementById("quiz-container").innerHTML = "<p>Quiz complet! Mulțumim pentru participare!</p>";
    }
}

function answerQuestion(answer) {
    const correct = questions[currentQuestion].answer;
    document.getElementById("result-text").innerText = answer === correct ? "Corect!" : "Greșit!";
    document.getElementById("result").style.display = "block";
    currentQuestion++;
}
