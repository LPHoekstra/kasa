import { useCallback, useState } from "react"
import "./index.scss"
import arrowLeft from "../../assets/arrow-left.svg"
import arrowRight from "../../assets/arrow-right.svg"

function Carousel({ lodging }) {
    const [slideNumber, setSlideNumber] = useState(0)

    const handleSlideChange = useCallback((i) => {
        let count = (slideNumber + i + lodging.pictures.length) % lodging.pictures.length
        setSlideNumber(count)
    }, [lodging.pictures.length, slideNumber])

    return (
        <div className="carousel">
            <img src={lodging.pictures[slideNumber]} alt={lodging.title} className="carousel__img" />
            {/* if there is more than 1 image, arrows and numerotation is displayed */}
            {lodging.pictures.length > 1 ?
                <div>
                    <img src={arrowLeft} alt="précédent"
                        className="carousel__arrow carousel__arrow--left"
                        onClick={() => handleSlideChange(-1)} />
                    <img src={arrowRight} alt="suivant"
                        className="carousel__arrow carousel__arrow--right"
                        onClick={() => handleSlideChange(+1)} />
                    <span className="carousel__number">{slideNumber + 1}/{lodging.pictures.length}</span>
                </div>
                :
                null
            }
        </div>
    )
}

export default Carousel