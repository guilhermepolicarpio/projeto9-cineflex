import React from "react";
import Movies from "./Movies";
import Top from "./Top";


export default function Main({title}){

    return(
        <>
            <Top title={"Selecione o filme"}/>
            <Movies/>
        </>
    )
}