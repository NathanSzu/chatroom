import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import firebase from 'firebase/app';


export default function Chatroom({ firestore, useCollectionData, auth }) {
    // Create a reference to the messages firestore collection
    const messagesRef = firestore.collection('messages');
    // Make a query for a subset of documents ordered by creation date/time and limited to 25 messages
    const query = messagesRef.orderBy('createdAt').limit(25);

    // Listen to data and update in real time using useCollectionData hook that we import
    // Returns an object containing the messages from the database
    const [messages] = useCollectionData(query, {idField: 'id'});
    console.log(messages)

    // Adding a state to hold message content.
    const [formValue, setFormValue] = useState('');

    // Event handler to add the message to firestore database when form is submitted.
    const sendMessage = async(e) => {

        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });

        setFormValue('');

    }

    // populate the messages using a ChatMessage component and the map method
    return (
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} uid={msg.uid} auth={auth} />)}
            </div>

            <form onSubmit={sendMessage}>

                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

                <button type="submit">Send</button>

            </form>
        </>
    )
}
