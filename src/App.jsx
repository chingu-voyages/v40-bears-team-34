import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchApartments } from './features/apartment/apartmentsSlice'

// Importing other components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Apartment from './pages/Apartment'
import Apartments from './pages/Apartments'
import Home from './pages/Home'
import Resultsnew from './pages/Results'
import WishList from './pages/WishList'

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
                <Route path="/results" element={<Resultsnew />} />
                <Route path="/apartments" element={<Apartments />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/apartments/:id" element={<Apartment />} />
            </Routes>
            <Footer />
        </React.Fragment>
    )
}

export default App
