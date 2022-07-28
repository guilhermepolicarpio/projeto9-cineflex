import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./components/Main"
import Sessions from "./components/Sessions";

const rootHtml= document.querySelector(".root")

export default function Initial(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/:id/showtimes" element={<Sessions />}/>
         </Routes>
    </BrowserRouter>
    )
}

ReactDOM.render(<Initial />, rootHtml);