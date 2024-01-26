import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

import LandingPage from './pages/LandingPage.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import TemperaturePage from './pages/TemperaturePage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/Exer-Oprec-24/home" replace />,
    },
    {
        path: "/Exer-Oprec-24/home",
        element: <LandingPage />,
    },
    {
        path: "/Exer-Oprec-24/currency",
        element: <CurrencyPage />,
    },
    {
        path: "/Exer-Oprec-24/Temperature",
        element: <TemperaturePage />,
    },
    {
        path: "*",
        element: <Navigate to="/Exer-Oprec-24/home" replace />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
