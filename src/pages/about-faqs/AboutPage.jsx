import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()
    const navigation = useNavigate()

    console.log('We are in Route:', location.pathname)

    const navigate = (path) => {
        navigation(path)
    }

    const goBack = () => {
        navigation(-1)
    }

    const goForward = () => {
        navigation(+1)
    }

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={ () => navigate('/') }>
                    Go To Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage
