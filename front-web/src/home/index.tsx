import "./styles.css"
import { ReactComponent as Image } from "./imagem.svg"
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">Faça ja seu pedido<br />
                    Que entregamos<br />
                    para voce !!!
                    </h1>

                    <h3 className="home-subtitle">
                        Escolha seu pedido e em pouco tempo<br /> levamos ate a sua porta
                    </h3>
                    <Link to="/orders" className="home-btn-order">FAZER PEDIDOS</Link>
                    
                </div>
                <div className="home-image">
                    <Image />
                </div>
            </div>
        </div>
    )
}