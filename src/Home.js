import React from 'react'

export default function Home({logout}) {
    const expireSession = () => logout();

    return (
        <div>
            This is home
            <button onClick={() => expireSession()}>
                logout
            </button>
        </div>
    )
}
