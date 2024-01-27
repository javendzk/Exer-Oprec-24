import { HashRouter as Router, Route, Navigate, Routes } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

import LandingPage from './pages/LandingPage.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import TemperaturePage from './pages/TemperaturePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/currency" element={<CurrencyPage />} />
                <Route path="/temperature" element={<TemperaturePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
