import React from 'react'

export default function Login({login}) {
    const authenticate = () => login();

    return (
        <div>
            This is login form
            <button onClick={() => authenticate()}>
                Login
            </button>
        </div>
    )
}
