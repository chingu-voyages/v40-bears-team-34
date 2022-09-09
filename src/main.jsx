import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="*" element={<App />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.Fragment>
)
