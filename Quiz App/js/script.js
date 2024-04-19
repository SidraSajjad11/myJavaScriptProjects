const questions = [
  {
    questions: 'Which is largest animal in the world?',
    answers: [
      {
          text: 'Shark',
          correct: false,
      },
      {
        text: 'Blue Whale',
        correct: true,
      },
      {
        text: 'Elephant',
        correct: false,
      },
      {
        text: 'Giraffe',
        correct: false,
      },
    ]
  },
  {
    questions: 'Which is the smallest Continent in the world?',
    answers: [
      {
          text: 'Asia',
          correct: false,
      },
      {
        text: 'Australia',
        correct: true,
      },
      {
        text: 'Arctic',
        correct: false,
      },
      {
        text: 'Africa',
        correct: false,
      },
    ]
  },
  {
    questions: 'Which is the largest desert in the world?',
    answers: [
      {
          text: 'Kalahari',
          correct: false,
      },
      {
        text: 'Gobi',
        correct: false,
      },
      {
        text: 'Sahara',
        correct: false,
      },
      {
        text: 'Antarctica',
        correct: true,
      },
    ]
  },
  {
    questions: 'Which is the smallest country  in the world?',
    answers: [
      {
          text: 'Vitican City',
          correct: true,
      },
      {
        text: 'Bhutan',
        correct: false,
      },
      {
        text: 'Nepal',
        correct: false,
      },
      {
        text: 'Shrilinka',
        correct: false,
      },
    ]
  },
]
const questionElement = document.querySelector('#question');
const answerButtonElement = document.querySelector('#answer-button');
const nextButtonElement = document.querySelector('#next-btn');
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  console.log('Start quiz functions Called')
  currentQuestionIndex = 0;
  score = 0;
  nextButtonElement.innerHTML ='Next';
  showQuestion();
} 
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.questions}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtonElement.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}
function resetState() {
  nextButtonElement.style.display = 'none';
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectBtn.classList.add('correct');
    score++;
  } else {
    selectBtn.classList.add('incorrect');
  }
  Array.from(answerButtonElement.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButtonElement.style.display = 'block';
}
function showScore() {
  resetState();
  questionElement.innerHTML = `Your Scored ${score} out of the ${questions.length}!`;
  nextButtonElement.innerHTML = 'Play again...';
  nextButtonElement.style.display = 'block';
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButtonElement.addEventListener('click', () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else {
    startQuiz();
  }
})
startQuiz();