import React from "react";
import Movies from "./Movies";


export default function Main(){

    return(
        <>
            <div className="top">
                <h1>CINEFLEX</h1>
            </div>
            <div className="option">
                <h2>Selecione o filme</h2>
            </div>
            <Movies/>
        </>
    )
}