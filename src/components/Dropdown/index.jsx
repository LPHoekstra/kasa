import { useEffect, useRef, useState } from "react"
import arrowDropdown from "../../assets/arrow-dropdown.svg"
import "./index.scss"

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        const height = contentRef.current.scrollHeight
        setContentHeight(height)
    }, [isOpen])

    return (
        <div className="dropdown">
            <div className="dropdown__bar">
                <h2 className="dropdown__title">{title}</h2>
                <img src={arrowDropdown} alt="déroulement du menu"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`dropdown__arrow ${isOpen ? "dropdown__arrow--active" : ""}`} />
            </div>
            <div className={`dropdown__content ${isOpen ? "" : "dropdown__content--hidden"}`}
                ref={contentRef}>
                {children}
            </div>
            {/* add a dynamic space for the content */}
            <div className="dropdown__content-spacing"
                style={{ height: isOpen ? `${contentHeight}px` : "0" }} />
        </div>
    )
}

export default Dropdown