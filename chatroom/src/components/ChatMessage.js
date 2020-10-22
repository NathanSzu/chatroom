import React from 'react'

export default function ChatMessage(props) {
    // Deconstruct the text and user id from each message passed in using props
    const { text, uid } = props.message;

    return <p>{text}</p>
}
