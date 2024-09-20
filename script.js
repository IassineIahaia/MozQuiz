const quizData = [
  {
    "question": "Qual é a capital de Moçambique?",
    "a": "Beira",
    "b": "Nampula",
    "c": "Maputo",
    "d": "Inhambane",
    "correct": "c"
  },
  {
    "question": "Em que ano Moçambique conquistou a independência?",
    "a": "1975",
    "b": "1964",
    "c": "1980",
    "d": "1992",
    "correct": "a"
  },
  {
    "question": "Qual é o maior rio de Moçambique?",
    "a": "Rio Zambeze",
    "b": "Rio Limpopo",
    "c": "Rio Save",
    "d": "Rio Rovuma",
    "correct": "a"
  },
  {
    "question": "Qual é o idioma oficial de Moçambique?",
    "a": "Inglês",
    "b": "Português",
    "c": "Changana",
    "d": "Macua",
    "correct": "b"
  },
  {
    "question": "Qual é a moeda oficial de Moçambique?",
    "a": "Rand",
    "b": "Euro",
    "c": "Dólar",
    "d": "Metical",
    "correct": "d"
  },
  {
    "question": "Qual é a maior cidade de Moçambique em termos de população?",
    "a": "Beira",
    "b": "Maputo",
    "c": "Nampula",
    "d": "Tete",
    "correct": "b"
  },
  {
    "question": "Quem foi o primeiro presidente de Moçambique após a independência?",
    "a": "Joaquim Chissano",
    "b": "Armando Guebuza",
    "c": "Samora Machel",
    "d": "Filipe Nyusi",
    "correct": "c"
  },
  {
    "question": "Qual é o nome do parque nacional mais famoso de Moçambique?",
    "a": "Parque Nacional da Gorongosa",
    "b": "Reserva do Niassa",
    "c": "Parque Nacional do Limpopo",
    "d": "Reserva Especial de Maputo",
    "correct": "a"
  },
  {
    "question": "Qual é o principal porto de Moçambique?",
    "a": "Porto da Beira",
    "b": "Porto de Maputo",
    "c": "Porto de Nacala",
    "d": "Porto de Pemba",
    "correct": "b"
  },
  {
    "question": "Qual é o prato típico mais conhecido de Moçambique?",
    "a": "Caril de camarão",
    "b": "Feijoada",
    "c": "Piri-piri",
    "d": "Matapa",
    "correct": "d"
  },
  {
    "question": "Quantas províncias existem em Moçambique?",
    "a": "10",
    "b": "11",
    "c": "12",
    "d": "9",
    "correct": "b"
  },
  {
    "question": "Qual é a montanha mais alta de Moçambique?",
    "a": "Monte Namuli",
    "b": "Monte Binga",
    "c": "Serra da Gorongosa",
    "d": "Monte Chiperone",
    "correct": "b"
  },
  {
    "question": "Qual é o nome do principal rio que forma a fronteira entre Moçambique e o Zimbábue?",
    "a": "Rio Limpopo",
    "b": "Rio Zambeze",
    "c": "Rio Save",
    "d": "Rio Rovuma",
    "correct": "a"
  },
  {
    "question": "Qual país faz fronteira com Moçambique ao norte?",
    "a": "África do Sul",
    "b": "Tanzânia",
    "c": "Zâmbia",
    "d": "Malawi",
    "correct": "b"
  },
  {
    "question": "Qual cidade é conhecida como a 'capital cultural' de Moçambique?",
    "a": "Maputo",
    "b": "Beira",
    "c": "Ilha de Moçambique",
    "d": "Nampula",
    "correct": "c"
  }
];


const quiz= document.getElementById('quiz')
const answersEls= document.querySelectorAll('.answer');
const questionEl= document.getElementById('question');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const submitBtn= document.getElementById('submit');

let currentQuiz= 0;
let score= 0;

loadQuiz();

function loadQuiz(){
  deslectAnswers();

  const currentData = quizData[currentQuiz];
  questionEl.innerText= currentData.question;
  a_text.innerText= currentData.a;
  b_text.innerText= currentData.b;
  c_text.innerText= currentData.c;
  d_text.innerText= currentData.d;
}

function deslectAnswers(){
  answersEls.forEach(answerEl => answerEl.checked = false);
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
      loadQuiz();
    }else{
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

function getSelected(){
  let answer;
  answersEls.forEach(answerEl => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer;
}


