import { Route, Routes, useRoutes } from 'react-router-dom'
import Detail from './pages/Detail'
import Main from './pages/Main'
import React from 'react';

export default function App() {
    const routes = useRoutes([
        { path: '/', element: <Main /> },
        { path: '/detail/:id', element: <Detail /> }
    ]);

    return routes;
}