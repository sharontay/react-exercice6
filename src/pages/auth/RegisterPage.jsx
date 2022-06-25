import React from 'react'
import RegisterFormik from '../../components/pure/forms/registerFormik'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <Typography variant='body2' color='GrayText' align='center'>
                Already have an account?
                <Link color='inherit' href='/login'>
                    Login in
                </Link>
            </Typography>
            <RegisterFormik />
        </div>
    )
}

export default RegisterPage
