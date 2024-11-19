import homeImg from "../../assets/background-image-main-title.png"
import aboutImg from "../../assets/background-image-about.png"
import "./index.scss"
import { useLocation } from "react-router-dom"

function Banner ({ title }) {
    const location = useLocation()

    const bannerData = {
        "/": {
            img: homeImg,
            alt: "côte sauvage",
            className: "banner-home",
        },
        "/a-propos": {
            img: aboutImg,
            alt: "paysage montagneux",
            className: "banner-about",
        },
    };

    const {img: currentImg, alt, className: locationClass} = bannerData[location.pathname]

    return (
        <div className={`banner ${locationClass}`}>
            <img className="banner__img" src={currentImg} alt={alt} />
            {title && <h1 className="banner__title">{title}</h1>}
        </div>
    )
}

export default Banner