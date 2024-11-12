/* eslint-disable jsx-a11y/img-redundant-alt */
import { useNavigate, useParams } from "react-router-dom"
import lodgings from "../../lodging.json"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"
import "./index.scss"
import Dropdown from "../../components/Dropdown"
import { useEffect, useState } from "react"
import starActive from "../../assets/star-active.svg"
import starInactive from "../../assets/star-inactive.svg"

function Lodging() {
    const navigate = useNavigate()
    const param = useParams()
    const [slideNumber, setSlideNumber] = useState(0)
    const filteredLodging = lodgings.filter(lodging => param.id === lodging.id)[0]

    // count the number of stars for the rating
    const [starArray, setStarArray] = useState([])
    useEffect(() => {
        if (filteredLodging) {
            const newStarArray = []
            for (let i = 0; i < 5; i++) {
                if (Number(filteredLodging.rating) > i) {
                    newStarArray.push(true)
                } else {
                    newStarArray.push(false)
                }
            }

            setStarArray(newStarArray)
        }
    }, [filteredLodging])

    // if no lodging as been found in the filter he's redirected
    useEffect(() => {
        if (!filteredLodging) {
            navigate("/error", { replace: true })
        }
    }, [filteredLodging, navigate])

    if (!filteredLodging) {
        return null;
    }

    const hostName = filteredLodging.host.name.split(" ")

    const handleSlideChange = (i) => {
        let count = (slideNumber + i + filteredLodging.pictures.length) % filteredLodging.pictures.length
        setSlideNumber(count)
    }

    return (
        <main>
            <section className="lodgement-section">
                {/* carousel */}
                <div className="carousel">
                    <img src={filteredLodging.pictures[slideNumber]} alt={filteredLodging.title} className="carousel__img" />
                    {/* if there is more than 1 image, arrows and numerotation is displayed */}
                    {filteredLodging.pictures.length > 1 ?
                        <div>
                            <img src={arrowLeft} alt="Image précédente"
                                className="carousel__arrow carousel__arrow--left"
                                onClick={() => handleSlideChange(-1)} />
                            <img src={arrowRight} alt="Image suivante"
                                className="carousel__arrow carousel__arrow--right"
                                onClick={() => handleSlideChange(+1)} />
                            <span className="carousel__number">{slideNumber + 1}/{filteredLodging.pictures.length}</span>
                        </div>
                        :
                        null
                    }
                </div>
                {/* information about the accommodation */}
                <div className="location-and-host-container">
                    <div className="location-container">
                        <h1 className="location-container__title">{filteredLodging.title}</h1>
                        <p className="location-container__location">{filteredLodging.location}</p>
                        <div className="tags-wrapper">
                            {filteredLodging.tags.map(tag => (
                                <span key={tag} className="tags-wrapper__tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="host-rating-container">
                        <div className="host-container">
                            <p className="host-container__name">
                                {hostName[0]}<br />
                                {hostName[1]}</p>
                            <img src={filteredLodging.host.picture} alt={filteredLodging.host.name} className="host-container__img" />
                        </div>
                        {/* stars rating */}
                        <div className="rating-container">
                            {starArray.map((isRate, index) => (
                                <img src={isRate ? starActive : starInactive} alt="star" key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="dropdown-bar">
                    <Dropdown title="Description">
                        <p>{filteredLodging.description}</p>
                    </Dropdown>
                    <Dropdown title="Equipements">
                        <ul>
                            {filteredLodging.equipments.map(equipment => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </section>
        </main>
    )
}

export default Lodging