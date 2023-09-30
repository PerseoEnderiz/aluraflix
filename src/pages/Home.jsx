import Button from "../components/Boton"
import Banner from "../components/Banner"
const Home = () => {
    return (
        <main>
            <Banner/>
            <div className="container">

                <h2 className="title-page">Pet noticias</h2>
            </div>
            <Button
                equipo="frontend"
                texto="Frontend"
                size="medium"
            />
                <Button
                equipo="ux"
                texto="UX"
                size="small"
            />
                <Button
                equipo="mobile"
                texto="Mobile"
                size="big"
            />
        </main>
    )
    }
    
export default Home