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
  {question:'  Qual a expectativa de vida do peixe Botia Palhaco?   ',
answers:[ {text:'   20 + *   ' ,correct: true},
{text:'    30+  ' ,correct: false},
{text:'   10   ' ,correct: false}]},

{question:'  Qual o tipo de reproducao do peixe Flowerhorn?  ',
answers:[ {text:'    oviparo*  ' ,correct: true},
{text:'    Fecundação interna  ' ,correct: false},
{text:'    nao se reproduz  ' ,correct: false}]},

{question:'  O peixe Aulonocara pertence a qual lago?  ',
answers:[ {text:'    Vitória   ' ,correct: false},
{text:'    Tanganyika   ' ,correct: false},
{text:'    Malawi*  ' ,correct: true}]},

{question:'  Qual destes PH é ácido?  ',
answers:[ {text:'    6.2*   ' ,correct: true},
{text:'   7  ' ,correct: false},
{text:'   7.9  ' ,correct: false}]},

{question:'  Mbuna são ciclídeos   ',
answers:[ {text:'    Americanos  ' ,correct: false},
{text:'    africanos*  ' ,correct: true},
{text:'    Asiáticos   ' ,correct: false}]},

{question:'  A pirarara pode chegar a que tamanho na fase adulta?  ',
answers:[ {text:'    20cm   ' ,correct: false},
{text:'    50cm   ' ,correct: false},
{text:'    150cm*   ' ,correct: true}]},

{question:'  Qual o outro nome que o peixe Mocinha tem?   ',
answers:[ {text:'    Canivete*  ' ,correct: true},
{text:'    Faca  ' ,correct: false},
{text:'    Facão   ' ,correct: false}]},

{question:'  O peixe Ramirezi tem origem em qual país?   ',
answers:[ {text:'    Brasil   ' ,correct: false},
{text:'    Venezuela*  ' ,correct: true},
{text:'    Argentina  ' ,correct: false}]},

{question:'  O peixe palhaço (Nemo) também é conhecido por?   ',
answers:[ {text:'    Peixe anêmona*   ' ,correct: true},
{text:'    Peixe arraia   ' ,correct: false},
{text:'    Peixe borboleta   ' ,correct: false}]},

{question:'  O peixe leão é uma peixe de água...   ',
answers:[ {text:'    Doce   ' ,correct: false},
{text:'    Salobra   ' ,correct: false},
{text:'    *Salgada  ' ,correct: true}]},

{question:'  O Ciclideo Frontosa pertence a qual lago?  ',
answers:[ {text:'    Tanganyika*   ' ,correct: true},
{text:'    Vitória   ' ,correct: false},
{text:'    Malawi  ' ,correct: false}]},

{question:'  Qual destas plantas e uma planta High-Demand(alta demanda ou high tech)?   ',
answers:[ {text:'    * Eusteralis Stellata   ' ,correct: true},
{text:'    Cabomba   ' ,correct: false},
{text:'    Rotala Indica  ' ,correct: false}]},

{question:'  Qual a dureza da agua para um Aulonocara?   ',
answers:[ {text:'    mole   ' ,correct: false},
{text:'    media   ' ,correct: false},
{text:'    dura*  ' ,correct: true}]},

{question:'  Qual um outro nome do peixe Oscar?   ',
answers:[ {text:'    acará-Minguante   ' ,correct: false},
{text:'    acará-ostralus   ' ,correct: false},
{text:'    * acará-açu   ' ,correct: true}]},

{question:'  Qual destes não é uma espécie de Acará Disco?   ',
answers:[ {text:'    Albino Gold   ' ,correct: false},
{text:'    Dream pearl*  ' ,correct: true},
{text:'    Fireworks  ' ,correct: false}]},

{question:'  Substrato de aragonita é prejudicial para ...   ',
answers:[ {text:'   Aquário marinho   ' ,correct: false},
{text:'    Aquário Amazônico  ' ,correct: true},
{text:'    Aquário de ciclídeos africanos  ' ,correct: false}]},




]