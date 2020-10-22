import React from 'react';
import './App.css';
import Chatroom from './components/Chatroom'
import SignIn from './components/SignIn'

// Importing firebase SDK
import firebase from 'firebase/app';
// Importing firestore database
import 'firebase/firestore';
// Importing firebase user authentication
import 'firebase/auth';

// Importing firebase hooks to use in react
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // firebase config data goes here
  apiKey: "AIzaSyC2kO-yAlZ37Xc4HlmA5MkFJa7zrk8HsmM",
  authDomain: "fir-practice-d60a9.firebaseapp.com",
  databaseURL: "https://fir-practice-d60a9.firebaseio.com",
  projectId: "fir-practice-d60a9",
  storageBucket: "fir-practice-d60a9.appspot.com",
  messagingSenderId: "192860976134",
  appId: "1:192860976134:web:036133bf9b2769c40cff87"
})

// Referencing auth and firestore as global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // Stores info of currently logged in user as an object
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <Chatroom firestore={firestore} useCollectionData={useCollectionData} /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
