import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import Top from "./Top";
import axios from "axios";
import Footer from "./Footer";

export default function Sessions() {
    const params = useParams();
    const [sessions, setSessions] = useState([]);
    const [days,setDays]=useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`
    );

    requisicao.then((res) => {
        setSessions(res.data);
        setDays(res.data.days);
    });
  }, []);


return(
    <>
    <Top title={"Selecione o horário"}/>
    <ul className="movies-dates">
      {days.map((day) => (
         <Day IDSession={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>
         
      ))}
    </ul>
    <Footer image={sessions.posterURL} titlemovie={sessions.title}/>
    </>
)

function Day({weekday,date,showtimes}){

  
    return(
        <div className="day">
            <div className="date">{weekday} - {date}</div>
           <div className="times">
                {showtimes.map(showtime=> <Showtime key={showtime.id} showtime={showtime.name} id={showtime.id}/>)}
            </div>

        </div>
    );
}

function Showtime({id,showtime}){

    console.log(id)
    return(
        <Link to={`/showtimes/${id}/seats`}>
            <div className="showtime">{showtime}</div>
        </Link>
     
    );
}}
