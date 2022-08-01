import {Link } from "react-router-dom";

export default function Success({}){

return(
    <>
    <div className="top">
                <h1>CINEFLEX</h1>
        </div>
    <div className="option">
            <h4>Pedido feito com sucesso!</h4>
    </div>
    <div className="succsess-container">
        <div className="success-title">
            <h2> Filme e sessão</h2>
            <h3></h3>
        </div>

        <div className="success-title">
            <h2> Ingressos</h2>
        </div>

        <div className="success-title">
            <h2> Comprador</h2>
        </div>
    </div>
    <Link to={"/"}>
    <div className="button-box">
            <button>Voltar para home</button>
    </div>
    </Link>
    </>
)
}