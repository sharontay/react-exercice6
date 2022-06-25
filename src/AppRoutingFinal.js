import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import LoginPage from './pages/auth/LoginPage'
import DashBoardPage from './pages/dashboard/DashBoard'
import NotFoundPage from './pages/404/NotFoundPage.jsx'
import RegisterPage from './pages/auth/RegisterPage'
import TasksPage from './pages/tasks/TasksPage'

function AppRoutingFinal() {

    // TODO Change to value from sessionStorage (or shomething dinamic)
    let loggedIn = false

    return (
        <Router>
            <Routes>
                <Route path='/'>
                    {/* Redirections to protect our routes */}
                    <Route
                        index 
                        element={
                            loggedIn ?
                            <Navigate from='/' to='/dashboard' />
                            :
                            <Navigate from='/' to='/login' />
                        }
                    />
                    {/* Login Route */}
                    <Route path='login' element={ <LoginPage /> } />
                    {/* Register Route */}
                    <Route path='register' element={ <RegisterPage /> } />
                    {/* Tasks route */}
                    <Route
                        path='tasks'
                        element={
                            loggedIn ?
                            <TasksPage />
                            :
                            <Navigate from='/tasks' to='/login' />
                        }
                    />
                    {/* DashBoard Route */}
                    <Route
                        path='/dashboard'
                        element={
                            loggedIn ?
                            <DashBoardPage />
                            :
                            <Navigate from='/' to='/login' />
                        }
                    />
                </Route>
                <Route path='*' element={ <NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutingFinal
