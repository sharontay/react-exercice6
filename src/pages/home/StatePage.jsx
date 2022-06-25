import React from 'react'
import { useLocation } from 'react-router-dom'

const StatePage = () => {

    const { state } = useLocation()

    return (
        <div>
            <h1>State: { state.online ? 'This user is online' : 'The user is offline' }</h1>
        </div>
    )
}

export default StatePage
