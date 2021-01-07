import "./styles.css"
import { ReactComponent as Istagran } from "./instagram.svg"
import { ReactComponent as Linkdin } from "./linkedin.svg"
import { ReactComponent as Youtube } from "./youtube.svg"



export default function Footer() {
    return (
        <footer className="home-container">
            <div className="main-footer">
                App desenvolvido durante a segunda semana DevSuperior
            </div>
            <div className="footer-icons">
                < a href="/dd"><Youtube /></a>
                <a href="/ss"><Linkdin /></a>

                <a href="/cc"><Istagran /></a>
            </div>
        </footer>
    )
}