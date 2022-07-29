import Top from "./Top";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seats(){
    const  parameter   = useParams();
    const [seats, setSeats] = useState([]);
    const [movies,setMovies]= useState([]);
    const [days,setDays]= useState([]);
    const [hours,setHours]= useState([]);

    useEffect(() => {
        
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${parameter.id}/seats`);
		requisicao.then(res => {
            setSeats(res.data.seats)
            setMovies(res.data.movie)
            setDays(res.data.day)
            setHours(res.data.name)
        });
	}, []);

    console.log(seats)
    
    return(
    <>
    <Top title={"Selecione o(s) assento(s)"}/>
    <div>
    <Place seats={seats}/>
    <Form/>
    <Legend />
    </div>
    <Button/>
    <Footer image={movies.posterURL} titlemovie={movies.title} day={days.weekday} hours={hours}/>
    </>
    )
}

function Place({seats}){
    return (
        <div className="seats">
           {seats.map(local => <Local number={local.name} available={local.isAvailable}/>)}
        </div>
    )
}

function Local({number, available}){


    let [selecionavel, setSelecionavel] = useState(available)
    let css = ""
    selecionavel ? (css = `cadeira true`) : (css = `cadeira selecionado`)
    

    return (
        <>
            {available ?
                <div className={css} onClick={() => setSelecionavel(!selecionavel)}>
                    {number}
                </div>
                :
                <div className="cadeira false" onClick={() => alert("Esse assento não está disponível")}>
                    {number}
                </div>
                }
        </>
    )
}
function Button(){
    return (
        
            <div className="button-box">
                <button>Reservar assento(s)</button>
            </div>
     
    )
}

function Form(){
    return(
        <form > 
        <div class="forms">
                <h1>Nome do comprador</h1>
                <input type="text" placeholder="    Digite seu nome..."/>
                <h1>CPF do comprador</h1>
                <input type="text" placeholder="    Digite seu CPF..."/>
        </div>
        </form>
    )
}

function Legend(){
    return (
        <div className="legend">
            <div className="option">
                <div className="choice selected"></div>
                Selecionado
            </div>
            <div className="option">
                <div className="choice true"></div>
                Disponível
            </div>
            <div className="option">
                <div className="choice false"></div>
                Indisponível
            </div>
        </div>
    )
}

