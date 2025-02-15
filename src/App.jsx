import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainNavbar from "./components/navbar/MainNavbar.jsx";
import Staff from "./components/staff/Staff.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <MainNavbar />
            <Routes>
                <Route path='/staff' element=<Staff /> />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
