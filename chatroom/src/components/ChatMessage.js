import React from 'react'

export default function ChatMessage({ message, auth }) {
    // Deconstruct the text and user id from each message passed in using props
    const { text, uid, photoURL } = message;

    // Comparing the users in the firestore document to the currently logged in user to distinguish between sent and recieved messages. We set a css class based on this comparison.
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    )
}
