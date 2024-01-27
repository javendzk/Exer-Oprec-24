import { HashRouter, Route, Navigate, Routes } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

import LandingPage from './pages/LandingPage.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import TemperaturePage from './pages/TemperaturePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/currency" element={<CurrencyPage />} />
                <Route path="/temperature" element={<TemperaturePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
