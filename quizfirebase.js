
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA_S9vMFGKgLl6MPtrqQfOEBlpJ6B-y4D0",
    authDomain: "quiz-firebase1.firebaseapp.com",
    projectId: "quiz-firebase1",
    storageBucket: "quiz-firebase1.appspot.com",
    messagingSenderId: "215891163087",
    appId: "1:215891163087:web:8f88f52f24d5238c11c4ba",
    measurementId: "G-8W8GDKDBM9"

    
  };

  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  export default app;

  //own code
  const database=firebase.database();

  const form=document.querySelector("form");
  const addQuestionsContainer=document.querySelector("#add-question-button");
  const questionsContainer=document.querySelector("#questions-container");

  let questionCount=1;

  addQuestionButton.addEventListener("click",()=>{
    questionCount++;

    const questionDiv=document.createElement("div");
    questionDiv.setAttribute("id",'question-${questionCount}');

    const questionLabel=document.createElement("label");
    questionLabel.setAttribute("for",'question-${questionCount}-input');
    questionLabel.textCotent='Question ${questionCount}:';

    const questionInput=document.createElement("input");
    questionInput.setAttribute("type","text");
    questionInput.setAttribute("id",'question-${questionCount}-input');
    questionInput.setAttribute("name",'question-${questionCount}-input');

    const answerLabel=document.createElement("label");
    answerLabel.setAttribute("for",'answer-${questionCount}-input' );
    answerLabel.textCotent='Answer ${questionCount}:';

    const answerInput=document.createElement("input");
    answerInput.setAttribute("type","text");
    answerInput.setAttribute("id",'answer-${questionCount}-input');
    answerInput.setAttribute("name",'answer-${questionCount}-input');

    questionDiv.appendChild(questionLabel);
    questionDiv.appendChild(questionInput);
    questionDiv.appendChild(document.createElement("br"));
    questionDiv.appendChild(answerLabel);
    questionDiv.appendChild(answerInput);

    questionsContainer.appendChild(questionDiv);


  })

  form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const quizName=form.elements["quiz-name"].value;
    const numberofQuestions=parseInt(form.elements["number-of-questions"].value);

    const question=[];
    for (let i=1;i<=numberofQuestions;i++){
        const question=form.elements['question-${i}-input'].value;
        const answer=form.elements['answer-${i}-input'].value;
        question.push({question,answer});
    }

    database.ref("quizzes").push({quizName,questions});

    form.reset();
    questionsContainer.innerHTML="";
    questionCount=1;

});

  