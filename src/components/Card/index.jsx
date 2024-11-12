import { Link } from "react-router-dom"
import "./index.scss"

function Card({ lodging }) {
    return (
        <figure className="card">
            <Link to={"/logement/" + lodging.id}>
                <img src={lodging.cover} alt={lodging.title} className="card__img" />
                <figcaption className="card__title">{lodging.title}</figcaption>
            </Link>
        </figure>
    )
}

export default Card