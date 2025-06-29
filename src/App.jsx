import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainNavbar from "./components/navbar/MainNavbar.jsx";
import Staff from "./components/staff/Staff.jsx";
import Events from "./components/events/Events.jsx";
import WS from "./components/events/WS.jsx";
import SS from "./components/events/SS.jsx";
import WWB from "./components/about/WWB.jsx";
import D from "./components/about/D.jsx";
import C from "./components/about/C.jsx";
import ST from "./components/about/ST.jsx";

function App() {
  return (
    <div style={{marginLeft: 50, marginRight: 50}}>
        <BrowserRouter>
            <MainNavbar />
            {/*<Container></Container>*/}
            <Routes>
                <Route path= "/staff" element=<Staff /> />
                <Route path= "/events" element=<Events /> />
                <Route path= "/women" element=<WS /> />
                <Route path= "/senior" element=<SS /> />
                <Route path= "/wwb" element=<WWB />/>
                <Route path= "/dd" element=<D />/>
                <Route path={'/cc'} element={<C />}/>
                <Route path={'/st' } element={<ST/>} />
                <Route path={'/'} element={<ST/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
