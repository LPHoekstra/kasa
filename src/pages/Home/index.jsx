import "./index.scss"
import lodgings from "./../../lodging.json"
import Card from "../../components/Card"

function Home() {
    return (
        <main>
            <section>
                <div className="header-wrapper">
                    <h1 className="header-wrapper__title">Chez vous, partout et ailleurs</h1>
                </div>

                <div className="card-wrapper">
                    {lodgings.slice(0, 6).map((lodging) => (
                        <Card key={lodging.id} card={lodging} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home