import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, stock, imagen}) => {

    return (
    <article>
        <header>
            <h2>{nombre}</h2>
        </header>
        <picture>
            <img src={imagen} alt={nombre} />
        </picture>
        <section>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
        </section>
        <footer>
           <Link to={`/item/${id}`} >Ver detalles</Link>
        </footer>
    </article>
  )
}

export default Item