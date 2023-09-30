import "./Boton.css"
const Button = (props) => {
    const {equipo, size} = props;
    const bttn =
        //Tiene que leer la propiedad texto desd eprops
        // <button className="boton">{props.texto}</button>

        //tiene que colocar todo lo que este dentro de las etiquetas del componente
        <button className={`boton ${equipo} title-${size}`}>{props.texto || props.children}</button>
    return bttn;
}

export default Button;