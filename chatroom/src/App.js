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
  apiKey: "AIzaSyA5q-lu9iIE5v6P4I8jym913g16QCPB7WA",
  authDomain: "chatroom-9fc96.firebaseapp.com",
  databaseURL: "https://chatroom-9fc96.firebaseio.com",
  projectId: "chatroom-9fc96",
  storageBucket: "chatroom-9fc96.appspot.com",
  messagingSenderId: "68816750023",
  appId: "1:68816750023:web:63fd9b2fecb73087b785e2"
})

// Referencing auth and firestore as global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  // Stores info of currently logged in user as an object
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user ? <Chatroom firestore={firestore} useCollectionData={useCollectionData} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
