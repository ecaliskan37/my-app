import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import React from 'react';
import { render } from 'react-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </Router>)

}