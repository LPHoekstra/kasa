/* eslint-disable jsx-a11y/img-redundant-alt */
import { Navigate, useParams } from "react-router-dom"
import "./index.scss"
import Dropdown from "../../components/Dropdown"
import { useEffect, useState } from "react"
import starActive from "../../assets/star-active.svg"
import starInactive from "../../assets/star-inactive.svg"
import Carousel from "../../components/Carousel"
import userAPI from "../../api/userApi"
import Loaders from "../../components/Loaders"

// fix rerender of dropdown when carousel image change
function Lodging() {
    const param = useParams()
    const [lodging, setLodging] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await userAPI.getLodgingDetails(param.id)
                setLodging(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetch()
    }, [param.id])

    // return the loaders during the fetch
    if (loading) {
        return <Loaders />
    }

    // if there is an error, user is redirected
    if (error) {
        return <Navigate to={"/error"} replace={true} />
    }

    // count the number of stars for the rating
    const starArray = Array.from({ length: 5 }, (_, i) => i < Number(lodging.rating));

    const hostName = lodging.host.name.split(" ")

    return (
        <main>
            <section className="lodgement-section">
                {/* carousel */}
                <Carousel lodging={lodging} />
                {/* information about the accommodation */}
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
                                {hostName[0]}<br />
                                {hostName[1]}</p>
                            <img src={lodging.host.picture} alt={lodging.host.name} className="host-container__img" />
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
                    <Dropdown title="Description" content={lodging.description} />
                    <Dropdown title="Equipements" content={lodging.equipments} />
                </div>
            </section>
        </main>
    )
}

export default Lodging