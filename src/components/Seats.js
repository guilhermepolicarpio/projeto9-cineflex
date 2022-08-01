import Top from "./Top";
import Footer from "./Footer";
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Seats(){
    const  parameter   = useParams();
    const [seats, setSeats] = useState([]);
    const [movies,setMovies]= useState([]);
    const [days,setDays]= useState([]);
    const [hours,setHours]= useState([]);
    const [name,setName]=useState([]);
    const [cpf,setCpf]=useState([]);
    const [ids,setIds]= useState([]);

    useEffect(() => {
        
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${parameter.id}/seats`);
		requisicao.then(res => {
            setSeats(res.data.seats)
            setMovies(res.data.movie)
            setDays(res.data.day)
            setHours(res.data.name)
        });
	}, []);
    
    function adicionarAssento(id){
        setIds([...ids,parseInt(id)]); 
    }

    function sendRequest(){
        const objetoEnviado={
            ids: ids,
            name: name,
            cpf: cpf
        }

        console.log(objetoEnviado)
         
        const request=axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",objetoEnviado);
        request.then(answer=>console.log(answer));
      
    }

    return(
    <>
    <Top title={"Selecione o(s) assento(s)"}/>
    <div>
    <div className="seats">
           {seats.map(local => <Local key={local.id} number={local.name} available={local.isAvailable} adicionarAssento={adicionarAssento}/>)}
        </div>
    <form > 
        <div className="forms">
                <h1>Nome do comprador</h1>
                <input onChange={e=>setName(e.target.value)} type="text" placeholder="    Digite seu nome..."/>
                <h1>CPF do comprador</h1>
                <input onChange={e=>setCpf(e.target.value)}type="text" placeholder="    Digite seu CPF..."/>
        </div>
        </form>
    <Legend />
    </div>
    <Link to={"/sucesso"}>

    <div className="button-box">
            
            <button onClick={()=>sendRequest()}>Reservar assento(s)</button>
    </div>
    </Link>
    <Footer image={movies.posterURL} titlemovie={movies.title} day={days.weekday} hours={hours}/>
    </>
    )
}

function Local({number, available,adicionarAssento}){

    if(available===true){
        return (
            <div className="cadeira true" onClick={()=>adicionarAssento(number)}>{number} </div>
        );
    }
    else{
        return (
            <div className="cadeira false" onClick={()=>alert("Alguém já reservou este assento!")}>{number}</div>
        )
    }
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