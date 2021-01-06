import "./styles.css"
import { ReactComponent as Logo } from "./logo.svg"

export default function NavBar() {
    return (
        <nav className="main-navbar">
            <Logo/>
            <a className="logo-text" href="home">Ds delivery</a>
        </nav>
    )
}