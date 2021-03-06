import "./styles.css"
import { ReactComponent as Logo } from "./logo.svg"
import {
    Link
  } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="main-navbar">
            <Logo/>

            <Link to="/" className="logo-text">Ds delivery</Link>
        </nav>
    )
}