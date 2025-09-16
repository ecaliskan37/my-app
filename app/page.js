
"use client"
import App from '../App'
import React from "react";
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
export default Home
