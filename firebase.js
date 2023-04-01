    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
    // import{getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
    // import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCZEA2cLYSDgI-2fhWFBxAyqBdndaR6B9U",
      authDomain: "auth-of-quizzing-website-01.firebaseapp.com",
      projectId: "auth-of-quizzing-website-01",
      storageBucket: "auth-of-quizzing-website-01.appspot.com",
      messagingSenderId: "289707452201",
      appId: "1:289707452201:web:c78b5054fdb61cba3b7938",
      measurementId: "G-H6YBSVE34Z"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    export default app;
    // const database=getDatabase(app);
    // const auth = getAuth(app);