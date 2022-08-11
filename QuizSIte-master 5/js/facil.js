const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, points, questionindex
points = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionindex = currentQuestionIndex + 1
  questionElement.innerText = questionindex +'. ' + question.question 
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text 
    button.classList.add('btn','shtn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (currentQuestionIndex < 9){
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } 
}else {
  resultpoint() //
  startButton.innerText = 'Recomecar'
  zero()
  startButton.classList.remove('hide')
  
}}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    point()
  } else {
    element.classList.add('wrong')
  }
}
function point(){
  points++
  
  
 }
function resultpoint(){
  points = points - 10
   texto = " Voce acertou "+ points +" questoes."
  document.getElementById("score").innerHTML = texto;
 }
function zero(){
  points = 0
} 

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
  {question:' Qual destes PH é alcalino?   ',
answers:[ {text:'   6.1  ' ,correct: false},
{text:'   7  ' ,correct: false},
{text:'   7.5  ' ,correct: true}]},

{question:'  Aonde fica a maior parte da Biologia de um aquario?   ',
answers:[ {text:'    agua  ' ,correct: false},
{text:'   troncos  ' ,correct: false},
{text:'   filtro   ' ,correct: true}]},

{question:'  O peixe Lebiste e da familia...  ',
answers:[ {text:'    Poeciliidae*  ' ,correct: true},
{text:'    Poemilinae  ' ,correct: false},
{text:'    Coemaine   ' ,correct: false}]},

{question:'  Qual destes peixes é um peixe de água fria?  ',
answers:[ {text:'    Molinesias  ' ,correct: false},
{text:'    Acara bandeira   ' ,correct: false},
{text:'    *kinguios  ' ,correct: true}]},

{question:'  Qual é a última parte do processo de ciclagem?  ',//aquarium cycling
answers:[ {text:'    Amônia  ' ,correct: false},
{text:'    Nitrito   ' ,correct: false},
{text:'    Nitrato*   ' ,correct: true}]},

{question:'  O peixe Beta macho pode conviver com quantos outros betas machos sem brigar?  ',
answers:[ {text:'    0*   ' ,correct:true},
{text:'   1  ' ,correct: false},
{text:'   4  ' ,correct: false}]},

{question:'  Qual destes peixes não é um peixe de água fria?   ',
answers:[ {text:'    Platy*  ' ,correct: true},
{text:'    Kinguio   ' ,correct: false},
{text:'    Carpa   ' ,correct: false}]},

{question:'  Qual destes peixes pode retirar oxigênio na atmosfera?   ',
answers:[ {text:'    Terras neon   ' ,correct: false},
{text:'    Molinesias  ' ,correct: false},
{text:'    *colisas  ' ,correct: true}]},

{question:'  Qual a aparência da doença Ictio?   ',
answers:[ {text:'    Pontos brancos*   ' ,correct: true},
{text:'    Buracos na pele  ' ,correct: false},
{text:'    Olho inchado  ' ,correct: false}]},

{question:'  Qual destes peixes é um peixe de cardume?   ',
answers:[ {text:'    Acara Disco*   ' ,correct: true},
{text:'    Ramirezi   ' ,correct: false},
{text:'   Betta  ' ,correct: false}]},

{question:'  Em qual escala o Ph esta neutro?  ',
answers:[ {text:'   6  ' ,correct: false},
{text:'    7.0*  ' ,correct: true},
{text:'   8  ' ,correct: false}]},

{question:'  Qual é a primeira parte do processo de ciclagem?(primeiro pico)   ',
answers:[ {text:'    amonia*   ' ,correct: true},
{text:'    nitrito  ' ,correct: false},
{text:'    nitrato   ' ,correct: false}]},

{question:'  T.P.A significa...   ',
answers:[ {text:'    Troca parcial da agua  ' ,correct: true},
{text:'    Troca porosa de amonia   ' ,correct: false},
{text:'    Troca parcial da alimentacao  ' ,correct: false}]},

{question:'  O que não devo fazer se a amônia no meu aquário está alta?   ',
answers:[ {text:'    T.P.A  ' ,correct: false},
{text:'    Adicionar Prime  ' ,correct: false},
{text:'    Adicionar mais peixes  ' ,correct: true}]},

{question:'  O que é PH?   ',
answers:[ {text:'    Potencial Hidrogeniônico*  ' ,correct: true},
{text:'    Potencial hidrotermal   ' ,correct: false},
{text:'    Potencial Hidrotonico   ' ,correct: false}]},

{question:'  Qual o outro nome do peixe Betta?   ',
answers:[ {text:'    Peixe de briga siamês  ' ,correct: true},
{text:'    Peixe de briga irlandês   ' ,correct: false},
{text:'    Peixe de briga germânico   ' ,correct: false}]},

{question:'  O Tetra neon tem sua origem ...   ',
answers:[ {text:'    America do Sul  ' ,correct: true},
{text:'    Asia  ' ,correct: false},
{text:'    Europa   ' ,correct: false}]},

// perguntas para o app

// {question:'  Where is most of the biology of an aquarium?  ',
// answers:[ {text:'    water  ' ,correct: false},
// {text:'   trunk  ' ,correct: false},
// {text:'   filter   ' ,correct: true}]},

// {question:'  Cycling is the colonization of ...   ',
// answers:[ {text:'    Nitrifying bacteria ' ,correct: true},
// {text:'   Pathogenic bacteria  ' ,correct: false},
// {text:'   anaerobic bacteria    ' ,correct: false}]},

// {question:'  Name of the fish adaptation process to the new aquarium ',
// answers:[ {text:'    Acclimation' ,correct: true,
// {text:'    Acclotation  ' ,correct: false},
// {text:'   acclimotitation   ' ,correct: false}]},

]
