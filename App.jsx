import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail'
import Main from './components/Main'

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )

}