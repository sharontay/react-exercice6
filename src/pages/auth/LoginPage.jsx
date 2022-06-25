import React from 'react'
import LoginFormik from '../../components/pure/forms/loginFormik'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Typography variant='body2' color='GrayText' align='center'>
                Haven't an account?
                <Link color='inherit' href='/register'>
                    Register
                </Link>
            </Typography>
            <LoginFormik />
        </div>
    )
}

export default LoginPage
