import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ user }) => {

    const navigation = useNavigate()

    const navigateTo = (path) => {
        navigation(path)
    }

    const goBack = () => {
        navigation(-1)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigateTo('/tasks') }>
                Tasks
            </button>
            <button onClick={ goBack }>
                Go Back
            </button>
        </div>
    );
}

export default ProfilePage
