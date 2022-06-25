import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

import Copyright from '../../components/pure/Copyright'

const DashBoardPage = () => {

    const navigation = useNavigate()

    const logout = () => {
        navigation('/login')
    }

    return (
        <div>
            <Button variant='contained' onClick={ logout }>Logout</Button>
            <Copyright />
        </div>
    )
}

export default DashBoardPage
