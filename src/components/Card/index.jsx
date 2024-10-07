import { Link } from "react-router-dom"
import "./index.scss"

function Card({ card }) {
    return (
        <figure className="card">
            <Link to={"/logement/" + card.id}>
                <img src={card.cover} alt={card.title} className="card__img" />
                <figcaption className="card__title">{card.title}</figcaption>
            </Link>
        </figure>
    )
}

export default Card