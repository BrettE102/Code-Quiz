var questions = [
    {
        questionText:
            "What syntax represents a string?",
        choices: ["'hello'", "{hello}", "(hello)", "[hello]"],
        answer: "'hello'"
    },
    {
        questionText:
            "What tool is mainly used when debugging a broken app?",
        choices: ["Chrome dev tools", "some video games", "nothing", "none"],
        answer: "Chrome dev tools"
    },
    {
        questionText:
            "how many different data types are there?",
        choices: ["4", "5", "6", "7"],
        answer: "7"
    },
    {
        questionText:
            "what is an if/else statement enclosed with?",
        choices: ["curly bracket", "quotes", "parentheses", "straight bracket"],
        answer: "parentheses"
    },
]

var index = 0
var questionsEl = document.querySelector("#questions")
var timerEl = document.querySelector('.timer');
var starQuiz = document.querySelector("#begin");
var score = 0
var timeLeft = 60
var scoreList = document.querySelector("#score-list");

function storeScore() {
    localStorage.setItem("stored score", score);
}


function playgame() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerText = 'Time: ' + timeLeft;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};


starQuiz.addEventListener("click", function () {
    playgame()
    starQuiz.classList.add("hide")
    displayQuestion()
});

function displayQuestion() {
    questionsEl.innerHTML = ""
    var text = document.createElement("h2")
    text.innerText = questions[index].questionText
    questionsEl.appendChild(text)
    for (var i = 0; i < questions[index].choices.length; i++) {
        var button = document.createElement("button")
        button.innerText = questions[index].choices[i]
        button.addEventListener("click", checkAnswer)
        questionsEl.appendChild(button)
    }
};

function checkAnswer(event) {
    var ansText = event.target.textContent;
    console.log(ansText);
    if (ansText === questions[index].answer) {
        score = score + 100;
        index++;
        if (questions[index]) {
            displayQuestion()
        } else {
            alert("Game Over! Score: " + score);
            storeScore();
        }

    } else {
        timeLeft -= 10;
        score = score - 100;
        index++;
        displayQuestion()
    }
    
}