const questions = [
  {
    questions: 'Which is largest animal in the world?',
    answers: [
      {
          text: 'Shark',
          Correct: false,
      },
      {
        text: 'Blue Whale',
        Correct: true,
      },
      {
        text: 'Elephant',
        Correct: false,
      },
      {
        text: 'Giraffe',
        Correct: false,
      },
    ]
  },
  {
    questions: 'Which is the smallest Continent in the world?',
    answers: [
      {
          text: 'Asia',
          Correct: false,
      },
      {
        text: 'Australia',
        Correct: true,
      },
      {
        text: 'Arctic',
        Correct: false,
      },
      {
        text: 'Africa',
        Correct: false,
      },
    ]
  },
  {
    questions: 'Which is the largest desert in the world?',
    answers: [
      {
          text: 'Kalahari',
          Correct: false,
      },
      {
        text: 'Gobi',
        Correct: false,
      },
      {
        text: 'Sahara',
        Correct: false,
      },
      {
        text: 'Antarctica',
        Correct: true,
      },
    ]
  },
  {
    questions: 'Which is the smallest country  in the world?',
    answers: [
      {
          text: 'Vitican City',
          Correct: true,
      },
      {
        text: 'Bhutan',
        Correct: true,
      },
      {
        text: 'Nepal',
        Correct: false,
      },
      {
        text: 'Shrilinka',
        Correct: false,
      },
    ]
  },
]
const questionElement = document.querySelector('.question');
const answerButtonElement = document.querySelector('#answer-buttons');
const nextButtonElement = document.querySelector('#next-btn');
let currentQuestionIndex = 0;
let score =0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButtonElement.innerHTML ='Next';
  showQuestion();
} 
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.questions}`;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtonElement.appendChild(button);
  });
}
startQuiz();