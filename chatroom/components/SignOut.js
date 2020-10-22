import { auth } from 'firebase'
import React from 'react'

export default function SignOut() {
    return (
        auth.currentUser && (
            <button onClick={() => auth.signOut()}>Sign Out</button>

        )
    )
}
