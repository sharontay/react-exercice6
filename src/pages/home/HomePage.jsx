import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HomePage = () => {

    const location = useLocation()
    const navigation = useNavigate()

    console.log('We are in Route:', location.pathname)

    const navigate = (path) => {
        navigation(path)
    }

    const navigateProps = (path) => {
        navigation(path, {
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ () => navigateProps('/online-state') }>
                Go To Page with State / Query Params
            </button>
            <button onClick={ () => navigate('/profile') }>
                Go To Profile
            </button>
        </div>
    );
}

export default HomePage
