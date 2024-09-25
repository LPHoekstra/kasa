import { Link } from "react-router-dom"
import "./index.scss"

function Card({ card }) {
    return (
        <article className="card">
            <Link to={"/logement/" + card.id}>
                <img src={card.cover} alt={card.title} className="card__img" />
                <h2 className="card__title">{card.title}</h2>
            </Link>
        </article>
    )
}

export default Card