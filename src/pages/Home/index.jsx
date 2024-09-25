import "./index.scss"
import annonces from "./../../annonces.json"
import Card from "../../components/Card"

function Home() {
    return (
        <main>
            <section className="main-section">
                <h1>Chez vous, partout et ailleurs</h1>
            </section>

            <section className="card-section">
                {annonces.slice(0, 6).map((annonce) => (
                    <Card key={annonce.id} card={annonce} />
                ))}
            </section>
        </main>
    )
}

export default Home