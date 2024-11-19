import { useEffect, useMemo, useRef, useState } from "react"
import arrowDropdown from "../../assets/arrow-dropdown.svg"
import "./index.scss"
import { useLocation } from "react-router-dom"

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)
    const location = useLocation()

    const pageClass = useMemo(() => {
        const classesByPage = {
            "a-propos": "about-page",
            "logement": "lodging-page",
        };
        const pageKey = location.pathname.split("/")[1];
        const pageClass = classesByPage[pageKey] || "";

        return {
            dropdown: pageKey === "a-propos" ? "dropdown--about-page" : "",
            bar: `dropdown__bar--${pageClass}`,
            dropdownTitle: `dropdown__title--${pageClass}`,
        };
    }, [location.pathname]);

    useEffect(() => {
        const height = contentRef.current.scrollHeight
        setContentHeight(height)
    }, [isOpen])

    return (
        <div className={`dropdown ${pageClass.dropdown}`}>
            <div className={`dropdown__bar ${pageClass.bar}`}>
                <h2 className={`dropdown__title ${pageClass.dropdownTitle}`}>{title}</h2>
                <img src={arrowDropdown} alt="déroulement du menu"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`dropdown__arrow ${isOpen ? "dropdown__arrow--active" : ""}`} />
            </div>
            <div className={`dropdown__content ${isOpen ? "" : "dropdown__content--hidden"}`}
                ref={contentRef}
            >
                {children}
            </div>
            {/* add a dynamic space for the content */}
            <div className="dropdown__content-spacing"
                style={{ height: isOpen ? `${contentHeight}px` : "0" }} />
        </div>
    )
}

export default Dropdown