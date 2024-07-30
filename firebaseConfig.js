import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB3fEEaicfmYQIN4CtZY0oGabkSl3c21G4",
    authDomain: "notesapp-7e3b5.firebaseapp.com",
    projectId: "notesapp-7e3b5",
    storageBucket: "notesapp-7e3b5.appspot.com",
    messagingSenderId: "613278387735",
    appId: "1:613278387735:web:9a55202d75f76ac5165652"
  };

const app = initializeApp(firebaseConfig);

export default app;