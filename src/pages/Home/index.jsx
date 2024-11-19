import "./index.scss"
import lodgings from "./../../lodging.json"
import Card from "../../components/Card"
import Banner from "../../components/Banner"

function Home() {
    return (
        <main>
            <section className="home-section">
                <Banner title="Chez vous, partout et ailleurs" />

                <div className="card-wrapper">
                    {lodgings.slice(0, 6).map((lodging) => (
                        <Card key={lodging.id} lodging={lodging} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home