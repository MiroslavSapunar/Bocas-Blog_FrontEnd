import Destacados from "./Carrusel"
import Info from "./News"
import Trend from "./Trends"


function Body({ noticias, trending }) {

    return (
        <div className="row justify-content-center align-items-start px-0 py-4 mx-0 my-3">
            <div className="col-12 col-lg-8 px-0 py-4 alig-items-start">
                <div className="row justify-content-start mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Noticias</h4>
                </div>
                {
                    noticias.map((noticia, k) => <Info noticia={noticia} key={k} />)
                }

            </div>
            <div className="col-12 col-lg-4 px-2 py-4 alig-items-start">
                <div className="row justify-content-start mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Trending</h4>
                </div>
                {
                    trending.map((trend, k) => <Trend trend={trend} key={k} index={k + 1} />)
                }
            </div>
        </div>
    )
}

export default function Home({ destacados, noticias, trending }) {
    return (
        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <Destacados destacados={destacados} />
                <div style={{ height: "1rem" }}></div>
                <Body noticias={noticias} trending={trending} />
            </div>
        </div>
    )
}