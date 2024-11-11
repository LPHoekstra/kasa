import whiteLogo from "../../assets/kasa-white-logo.png"
import "./index.scss"

function Footer () {
    return (
        <footer className="footer">
            <img src={whiteLogo} alt="Kasa" className="footer__logo"/>
            <p className="footer__content">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer