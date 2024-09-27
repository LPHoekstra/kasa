/* eslint-disable jsx-a11y/img-redundant-alt */
import { useNavigate, useParams } from "react-router-dom"
import lodgings from "../../lodging.json"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"
import "./index.scss"
import Dropdown from "../../components/Dropdown"
import { useEffect } from "react"

function Lodging() {
    const param = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const lodgingExists = lodgings.some(lodging => param.id === lodging.id)
        if (!lodgingExists) {
            navigate("/error")
        }

    }, [param.id, navigate])

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
                                <div className="tags-wrapper">
                                    {lodging.tags.map(tag => (
                                        <span key={tag} className="tags-wrapper__tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="host-rating-container">
                                <div className="host-container">
                                    <p className="host-container__name">
                                        {lodging.host.name.split(" ")[0]}<br />
                                        {lodging.host.name.split(" ")[1]}</p>
                                    <img src={lodging.host.picture} alt={lodging.host.name} className="host-container__img" />
                                </div>
                                <div>{lodging.rating}</div>
                            </div>
                        </div>
                        <div className="dropdown-bar">
                            <Dropdown title="Description">
                                <p>{lodging.description}</p>
                            </Dropdown>
                            <Dropdown title="Equipements">
                                <ul>
                                    {lodging.equipments.map(equipment => (
                                        <li key={equipment}>{equipment}</li>
                                    ))}
                                </ul>
                            </Dropdown>
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default Lodging