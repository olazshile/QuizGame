
// Get the active question-number a
let currentQuestion = 0;
let questionIndex = 0;
let totalQuestion = questions.length;
let correctAnswer = 0;

//GEt question available
const option = document.getElementById('question-option');
const container = document.getElementById('question-container');
const questionContent = document.getElementById('question-index');
let nextQuestion = document.getElementById('nextbtn');
let resultCounter = document.getElementById('result');

//Get the values in the option box
const firstopt = document.getElementById('0');
const secondopt = document.getElementById('1');
const thirdopt = document.getElementById('2');
const fourthopt = document.getElementById('3');

// set Question on loading the browser
function loadQuestion(questionIndex) {

    let q = questions[questionIndex];

  if(questionIndex < questions.length){
    questionContent.textContent = `${questionIndex+1}. ${q.question}`;
    firstopt.textContent = q.options[0];
    secondopt.textContent = q.options[1];
    thirdopt.textContent = q.options[2];
    fourthopt.textContent = q.options[3];
  }else{
      questionContent.innerHTML = `<h1><center>Congrats! You have completed the Quiz Challenge</center></h1>`;
      document.getElementById('question-number').style.display = 'none';
      firstopt.style.display = 'none';
      secondopt.style.display = 'none';
      thirdopt.style.display = 'none';
      fourthopt.style.display = 'none';
      nextQuestion.style.display = 'none';
      document.getElementById('endgame').style.display = 'block';
      document.getElementById('resultbox').style.display = 'none';
      document.getElementById('showresult').style.display = 'block';
  document.getElementById('showresult').textContent = `Total Attained Point is ${correctAnswer} out of ${questions.length}`;
      document.getElementById('playagain').style.display = 'block'; 
    }
}

//loadNext Question on clicking nextbtn
function loadNextQuestion() {
    loadQuestion(currentQuestion);
    currentQuestion++;
    if(currentQuestion === totalQuestion) {
      nextQuestion.textContent = 'Check Result';
    }
    enableButton();
}

// check for clicked options 
function check(e) {
    if(e.id == questions[questionIndex].correctAnswer) {
      correctAnswer++;
        e.className = "correct";
        resultCounter.textContent = correctAnswer;
    }else {
      e.className = "wrong";
    }
    disableButton();
}

//disable and enable options
function disableButton() {
  for (let i = 0; i < option.children.length; i++) {
      option.children[i].style.pointerEvents = 'none';
      if(option.children[i].id == questions[questionIndex].correctAnswer) {
          option.children[i].className = "correct"; }
    }
}
function enableButton() {
  for (let i = 0; i < option.children.length; i++) {
    option.children[i].style.pointerEvents = 'auto';
    option.children[i].className = ''; }
}

window.onload = function() {
  loadNextQuestion();
}







