import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

    const navigation = useNavigate()

    const navigateTo = (path) => {
        navigation(path)
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={ () => navigateTo('/') }>
                Go Back to Home
            </button>
        </div>
    );
}

export default NotFoundPage
