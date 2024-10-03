import { Link } from "react-router-dom"
import "./index.scss" 

function Error () {
    return (
        <main>
            <section className="error-section">
                <h1 className="error-section__title">404</h1>
                <p className="error-section__content">Oups! La page que<br className="error-section__content--br"/> vous demandez n'existe pas.</p>
                <Link to={"/"} className="error-section__link">Retourner sur la page d'accueil</Link>
            </section>
        </main>
    )
}

export default Error