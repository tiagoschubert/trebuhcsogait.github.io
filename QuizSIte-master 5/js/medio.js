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
  {question:' Qual o PH ideal para o peixe Oscar?  ',
answers:[ {text:'    6.5 - 7*  ' ,correct: true},
{text:'    5.9 - 6.4   ' ,correct: false},
{text:'    6.6 - 7.2   ' ,correct: false}]},

{question:'  Acara Disco sao Ciclideos...  ',
answers:[ {text:'   Africanos  ' ,correct: false},
{text:'    *Americanos   ' ,correct: true},
{text:'    Asiaticos  ' ,correct: false}]},

{question:'  Qual o PH ideal para um Blue tang?   ',
answers:[ {text:'    7.5 - 8.0  ' ,correct: false},
{text:'    8.1 - 8.4   ' ,correct: false},
{text:'    8.5 - 8.9*  ' ,correct: true}]},

{question:'  Qual a dureza da agua para Coridoras?   ',
answers:[ {text:'    Dura   ' ,correct: false},
{text:'    Media  ' ,correct: false},
{text:'    Mole*  ' ,correct: true}]},

{question:'  Qual destes peixes respiram fora da água?  ',
answers:[ {text:'    Betta*  ' ,correct: true},
{text:'    Paulistinha   ' ,correct: false},
{text:'    Platy   ' ,correct: false}]},

{question:'  Qual o tipo de reprodução das molinesias?  ',
answers:[ {text:'    Ovíparo   ' ,correct: false},
{text:'    Viviparas*   ' ,correct: true},
{text:'    Onívoras  ' ,correct: false}]},

{question:'  Qual o tamanho da fase adulta de um Apistograma?   ',
answers:[ {text:'    3cm   ' ,correct: false},
{text:'    6cm*  ' ,correct: true},
{text:'    12cm   ' ,correct: false}]},

{question:'  Qual é o tipo de reprodução do acara bandeira?   ',
answers:[ {text:'    Viviparo  ' ,correct: false},
{text:'    Oviparos*  ' ,correct: true},
{text:'    Ornivoro  ' ,correct: false}]},

{question:'  Qual destes peixes não é um peixe de cardume?  ',
answers:[ {text:'    Matogrosso  ' ,correct: false},
{text:'    Acara Disco   ' ,correct: false},
{text:'    Betta   ' ,correct: true}]},

{question:'  O peixe Barbo Sumatra tem origem na...   ',
answers:[ {text:'    Indonesia*  ' ,correct: true},
{text:'    Japão   ' ,correct: false},
{text:'    Havaí  ' ,correct: false}]},

{question:'  Qual destes não é uma espécie de tucunaré?  ',
answers:[ {text:'    Tucunaré borboleta   ' ,correct: false},
{text:'    Tucunaré pitanga   ' ,correct: false},
{text:'    Tucunaré beija-flor*   ' ,correct: true}]},

{question:'  Qual a caracteristica da doenca BNC?  ',
answers:[ {text:'    olho inchado   ' ,correct: false},
{text:'    buracos na cabeca  ' ,correct: true},
{text:'    pontos brancos   ' ,correct: false}]},

{question:'  Qual o outro nome do peixe Blue Tang?  ',
answers:[ {text:'    Cirurgião Paleta*  ' ,correct: true},
{text:'    Cirurgião Lamina  ' ,correct: false},
{text:'    Cirurgião Hepatico  ' ,correct: false}]},

{question:'  Qual a dureza da água para Acará Bandeira?  ',
answers:[ {text:'    Mole*  ' ,correct: true},
{text:'    Média  ' ,correct: false},
{text:'    Dura   ' ,correct: false}]},

{question:'  Qual destas plantas não é low-demand (low-tech)?   ',
answers:[ {text:'    Elódea  ' ,correct: false},
{text:'    Valisnéria Anã  ' ,correct: false},
{text:'    Elatine Triandra*   ' ,correct: true}]},

{question:'  Qual o tamanho de aquario em que ele permanecera mais estavel?  ',
answers:[ {text:'    Beteira   ' ,correct: false},
{text:'    nano 30 litros  ' ,correct: false},
{text:'    aquario 200 litros*  ' ,correct: true}]},

  
]