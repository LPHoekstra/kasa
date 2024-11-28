import m from "./index.module.scss";

function Loaders() {
    return (
        <div className={m.container}>
            <div className={m.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loaders