import Destacados from "./Carrusel"
import Info from "./News"
import Trend from "./Trends"

//import { tokens } from '../../utils/rest'

function Body({ noticias, trending }) {

    return (
        <div className="row justify-content-center align-items-start px-0 py-4 mx-0 my-3">
            <div className="col-12 col-lg-8 px-0 py-4 alig-items-start">
                <div className="row justify-content-start mx-0">
                    <h4 style={{ textDecoration: "underline", fontSize: "1.2rem" }}>Novedades</h4>
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

function IgGrid({ ig }) {
    return (
        <div className="row mx-auto">
            {ig.map((p, i) =>
                < div className="col-12 col-sm-6 col-md-4 my-2" key={i}>
                    <a href={`${p.permalink}`}>

                        <div className="card">
                            <embed
                                title="Post Bocas"
                                width="100%"
                                height="100%"
                                showcontrols="false"
                                autoPlay="1"
                                mute="1"
                                src={`${p.media_url}`}
                                style={{ height: "20rem", objectFit: "cover" }}
                            >
                            </embed>
                            {/* <img src={p.media_url}  />
                                     */}
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default function Home({ destacados, noticias, trending, ig }) {
    return (
        <div className="row" style={{ width: "80%" }} >
            <div className="col px-0 py-4">
                <Destacados destacados={destacados} />
                <div style={{ height: "1rem" }}></div>
                <Body noticias={noticias} trending={trending} />
                <IgGrid ig={ig} />
            </div>
        </div >
    )
}