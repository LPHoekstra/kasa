import "./index.scss"
import annonces from "./../../annonces.json"

function Home() {
    return (
        <main>
            <section className="main-section">
                <h1>Chez vous, partout et ailleurs</h1>
            </section>

            <section className="card-section">
                {annonces.slice(0, 6).map((annonce) => (
                    <article key={annonce.id} className="card">
                        <img src={annonce.cover} alt={annonce.title} className="card__img" />
                        <h2 className="card__title">{annonce.title}</h2>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Home