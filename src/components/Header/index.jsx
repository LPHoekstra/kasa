import { Link } from "react-router-dom"
import logo from "../../assets/kasa-logo.png"
import "./index.scss"

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="/">
                    <img src={logo} alt="Logo de Kasa" />
                </Link>
                <nav>
                    <Link to="/" className="header__link">Accueil</Link>
                    <Link to="/a-propos" className="header__link">A Propos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header