import { Link } from "react-router-dom"
import logo from "../../assets/kasa-logo.png"
import "./index.scss"

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo de Kasa" />
            </Link>
            <nav>
                <Link to="/" className="header__link">Accueil</Link>
                <Link to="" className="header__link">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header