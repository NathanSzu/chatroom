import React from 'react'
import ChatMessage from './ChatMessage'


export default function Chatroom({ firestore, useCollectionData }) {
    // Create a reference to the messages firestore collection
    const messagesRef = firestore.collection('messages');
    // Make a query for a subset of documents ordered by creation date/time and limited to 25 messages
    const query = messagesRef.orderBy('createdAt').limit(25);

    // Listen to data and update in real time using useCollectionData hook that we import
    // Returns an object containing the messages from the database
    const [messages] = useCollectionData(query, {idField: 'id'});

    // populate the messages using a ChatMessage component and the map method
    return (
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
    )
}
