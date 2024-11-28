import "./index.scss"
import Card from "../../components/Card"
import Banner from "../../components/Banner"
import userAPI from "../../api/userApi"
import Loaders from "../../components/Loaders"
import { useEffect, useState } from "react"

function Home() {
    const [lodgings, setLodgings] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await userAPI.getLodging()
                setLodgings(data)
            } catch (error) {
                setError(error.message)
            }
        }

        fetch()
    }, [])

    console.log(lodgings)

    return (
        <main>
            <section className="home-section">
                <Banner title="Chez vous, partout et ailleurs" />

                <div className="card-wrapper">
                    {error ? <div>{error}</div> :
                        lodgings ? lodgings.map((lodging) => (
                            <Card key={lodging.id} lodging={lodging} />
                        ))
                            : <Loaders />
                    }
                </div>
            </section>
        </main>
    )
}

export default Home