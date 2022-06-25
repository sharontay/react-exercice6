import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage'
import TasksPage from './pages/tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'
import { useEffect } from 'react'
import StatePage from './pages/home/StatePage'

function AppRoutingOne() {

    let logged = false

    let taskList = [
        {
            id: 1,
            name: 'Task 1',
            description: 'My First Task'
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'My Second Task'
        }
    ]

    useEffect(() => {
        logged = localStorage.getItem('credentials')
        console.log('User Logged?', logged)
    }, [])

    return (
        <Router>
            <div>
                <aside>
                    <Link to='/'>|| HOME |</Link>
                    <Link to='/about'>| ABOUT |</Link>
                    <Link to='/faqs'>| FAQS |</Link>
                    <Link to='/task/1'>| Task 1 |</Link>
                    <Link to='/task/2'>| Task 2 |</Link>
                    <Link to='/any404'>| No Existing Route |</Link>
                    <Link to='/login'>| Login ||</Link>
                </aside>
                <main>
                    <Routes>
                        <Route path='/'>
                            <Route index element={ <HomePage />} />
                            <Route path='online-state' element={ <StatePage /> } />
                            <Route 
                                path='login'
                                element={ 
                                    logged ?
                                    <Navigate to='/' />
                                    :
                                    <LoginPage />
                                }
                            />
                            <Route path='about' element={ <AboutPage /> } />
                            <Route path='faqs' element={ <AboutPage /> } />
                            <Route
                                path='profile'
                                element={
                                    logged ? 
                                    <ProfilePage />
                                    :
                                    <Navigate to='/login' />
                                }    
                            />
                            <Route path='tasks' element={ <TasksPage /> } />
                            <Route
                                path='task/:id'
                                element={ <TaskDetailPage tasks={ taskList } /> }
                            />
                        </Route>
                        <Route path='*' element={ <NotFoundPage /> } />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default AppRoutingOne
