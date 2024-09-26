import "./index.scss"
import lodgings from "./../../lodging.json"
import Card from "../../components/Card"

function Home() {
    return (
        <main>
            <section className="main-section">
                <h1 className="main-section__title">Chez vous, partout et ailleurs</h1>
            </section>

            <section className="card-section">
                {lodgings.slice(0, 6).map((lodging) => (
                    <Card key={lodging.id} card={lodging} />
                ))}
            </section>
        </main>
    )
}

export default Home