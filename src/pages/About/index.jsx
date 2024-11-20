import "./index.scss"
import Dropdown from "../../components/Dropdown"
import Banner from "../../components/Banner"
import content from "./content.json"

function About() {
    return (
        <main>
            <section className="about-section">
                <Banner />
                <div className="dropdown-container">
                    {content.map(({ title, content }) => (
                        <Dropdown key={title} title={title} content={content} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default About