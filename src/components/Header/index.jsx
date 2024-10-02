import { Link } from "react-router-dom"
import logo from "../../assets/kasa-logo.png"
import "./index.scss"

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/">
                    <img src={logo} alt="Logo de Kasa" className="header__kasa"/>
                </Link>
                <nav className="header__navbar">
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">A Propos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header