/* eslint-disable jsx-a11y/img-redundant-alt */
import { Navigate, useParams } from "react-router-dom"
import lodgings from "../../lodging.json"
import "./index.scss"
import Dropdown from "../../components/Dropdown"
import { useMemo } from "react"
import starActive from "../../assets/star-active.svg"
import starInactive from "../../assets/star-inactive.svg"
import Carousel from "../../components/Carousel"

// fix rerender of dropdown when carousel image change
function Lodging() {
    const param = useParams()

    const filteredLodging = useMemo(() => {
        return lodgings.filter(lodging => param.id === lodging.id)[0]
    }, [param.id])

    // if no lodging as been found in the filter user is redirected
    if (!filteredLodging) {
        return <Navigate to={"/error"} replace />
    }

    // count the number of stars for the rating
    const starArray = Array.from({ length: 5 }, (_, i) => i < Number(filteredLodging.rating));
    
    const hostName = filteredLodging.host.name.split(" ")

    return (
        <main>
            <section className="lodgement-section">
                {/* carousel */}
                <Carousel filteredLodging={filteredLodging}/>
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
                    <Dropdown title="Description" content={filteredLodging.description} />
                    <Dropdown title="Equipements" content={filteredLodging.equipments} />
                </div>
            </section>
        </main>
    )
}

export default Lodging