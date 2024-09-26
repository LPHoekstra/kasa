/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom"
import lodgings from "../../lodging.json"
import arrowLeft from "./../../assets/arrow-left.svg"
import arrowRight from "./../../assets/arrow-right.svg"
import "./index.scss"

function Lodging() {
    const param = useParams()

    return (
        <main>
            {lodgings.filter(lodging => param.id === lodging.id)
                .map(lodging => (
                    <section key={lodging.id} className="lodgement-section">
                        <div className="carousel">
                            <img src={lodging.cover} alt={lodging.title} className="carousel__img" />
                            <img src={arrowLeft} alt="Image précédente" className="carousel__arrow-left"
                                onClick={() => console.log("image précédente")} />
                            <img src={arrowRight} alt="Image suivante" className="carousel__arrow-right"
                                onClick={() => console.log("image suivante")} />
                            <span className="carousel__number">0/{lodging.pictures.length}</span>
                        </div>
                        <div className="location-and-host-container">
                            <div className="location-container">
                                <h1 className="location-container__title">{lodging.title}</h1>
                                <p className="location-container__location">{lodging.location}</p>
                                <div className="location-container__tags-wrapper">
                                    {lodging.tags.map(tag => (
                                        <p key={tag}>{tag}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="host-rating-container">
                                <div className="host-container">
                                    <img src={lodging.host.picture} alt={lodging.host.name} className="host-container__img"/>
                                    <p className="host-container__name">{lodging.host.name}</p>
                                </div>
                                <div>{lodging.rating}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                Description
                            </div>
                            <div>
                                Equipements
                            </div>
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default Lodging