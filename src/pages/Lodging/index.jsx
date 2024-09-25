/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom"
import annonces from "../../annonces.json"
import arrowLeft from "./../../assets/arrow-left.svg"
import arrowRight from "./../../assets/arrow-right.svg"
import "./index.scss"

function Lodging() {
    const param = useParams()

    return (
        <main>
            {annonces.filter(annonce => param.id === annonce.id)
                .map(annonce => (
                    <section key={annonce.id}>
                        <div className="carousel">
                            <img src={annonce.cover} alt={annonce.title} className="carousel__img" />
                            <img src={arrowLeft} alt="Image précédente" className="carousel__arrow-left"
                                onClick={() => console.log("image précédente")} />
                            <img src={arrowRight} alt="Image suivante" className="carousel__arrow-right"
                                onClick={() => console.log("image suivante")} />
                            <span className="carousel__number">0/{annonce.pictures.length}</span>
                        </div>
                        <p>{annonce.location}</p>
                    </section>
                ))
            }
        </main>
    )
}

export default Lodging