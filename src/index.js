import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./components/Main"
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";

const rootHtml= document.querySelector(".root")

export default function Initial(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/:id/showtimes" element={<Sessions />}/>
            <Route path="/showtimes/:id/seats" element={<Seats/>}/>
         </Routes>
    </BrowserRouter>
    )
}

ReactDOM.render(<Initial />, rootHtml);