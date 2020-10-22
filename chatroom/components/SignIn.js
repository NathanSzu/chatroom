import { auth } from 'firebase';
import React from 'react'

export default function SignIn() {
    
    const signInWithGoogle = () => {
        // Instantiate Google auth provider
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}
