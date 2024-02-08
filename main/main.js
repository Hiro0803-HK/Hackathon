// クイズの問題と選択肢
const quizData = [
    {
        question: "日本の首都はどこですか？",
        choices: ["東京", "大阪", "京都"],
        correctAnswer: "東京"
    },
    {
        question: "世界で一番高い山は何ですか？",
        choices: ["富士山", "エベレスト", "キリマンジャロ"],
        correctAnswer: "エベレスト"
    },
    {
        question: "HTMLは何の略ですか？",
        choices: ["Hyper Text Markup Language", "High Tech Modern Language", "Happy Time Magic Land"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "徳島の有名な祭りは？",
        choices: ["阿波踊り", "ねぶた祭り", "よさこい祭り"],
        correctAnswer: "阿波踊り"
    },
    {
        question: "徳島県のゆるキャラは？",
        choices: ["すだちくん", "あいのすけ", "チュルディン"],
        correctAnswer: "すだちくん",
    },
    {
        question: "徳島県は日本で唯一、ある交通機関がない県です。それは何でしょうか？",
        choices: ["電車", "バス", "飛行機"],
        correctAnswer: "電車",
    },
    {
        question: "本当にあったオリンピック競技は？",
        choices: ["魚釣り", "山登り", "早食い競争"],
        correctAnswer: "魚釣り",
    },
    {
        question: "実在する魚は？",
        choices: ["おばさん", "おじさん", "ちちおや"],
        correctAnswer: "おじさん",
    },
    {
        question: "江戸時代から存在する言葉は？",
        choices: ["ワロタ", "マジ", "ウケる"],
        correctAnswer: "マジ",
    },
    

    
];


/*const btn4Text = document.getElementById('btn4-text');
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
  btn4Text.classList.remove('hidden');
  btn4Text.classList.add('popup-message');
});

btn4Text.addEventListener('animationend', () => {
  btn4Text.classList.remove('popup-message');
  btn4Text.classList.add('hidden');
});*/



const ShuffledQuizData = quizData.slice();
ShuffledQuizData.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

let rs;

// 問題と選択肢を表示
function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = ShuffledQuizData[currentQuestion].question;

    const choicesElement = document.querySelector(".btn-container");
    choicesElement.innerHTML = "";

    const shuffledChoices = ShuffledQuizData[currentQuestion].choices.slice();
    shuffledChoices.sort(() => Math.random() - 0.5);

    shuffledChoices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });

    
}

// 正解判定
function checkAnswer(selectedChoice) {
    if (selectedChoice === ShuffledQuizData[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent = `正解数: ${score} / ${quizData.length}`;
    }
}

// 最初の問題を表示
displayQuestion();
