import Button from "../Boton"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner container flex">
            <div className="banner_img">
                <div className="banner_blur flex">
                    <div className="banner-text">
                        <Button equipo="frontend" size="big"> FrontEnd</Button>
                        <h2 className="title-medium banner_title">Challenge React</h2>
                        <h3 className="body-small banner_body">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React. </h3>
                    </div>
                    <div className="banner-video"></div>
                </div>
            </div>
        </div>        
    )
}
    
export default Banner