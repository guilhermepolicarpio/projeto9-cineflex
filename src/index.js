import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./components/Main"

const rootHtml= document.querySelector(".root")

export default function Initial(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
         </Routes>
    </BrowserRouter>
    )
}

ReactDOM.render(<Initial />, rootHtml);