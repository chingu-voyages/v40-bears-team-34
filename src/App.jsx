import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchApartments } from './features/apartment/apartmentsSlice'

// Importing other components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Results from './pages/Results/Results'
import Home from './pages/Home'

// This route set up will make NavBar and Footer available app-wide without needing other component
function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchApartments())
    }, [])
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<Results />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}

export default App
