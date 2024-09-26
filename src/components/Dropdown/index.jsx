import { useState } from "react"
import arrowDropdown from "../../assets/arrow-dropdown.svg"
import "./index.scss"

function Dropdown({ title, children }) {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown__bar" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="dropdown__title">{title}</h2>
                <img src={arrowDropdown} alt="déroulement des équipements"
                className={`dropdown__arrow${+ isOpen ? "--active" : ""}`} />
            </div>
            <div className={`dropdown__content${+ isOpen ? "" : "--hidden"}`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown