import { Link } from "react-router-dom"

const Item = ({producto}) => {

    return (
    <article>
        <picture>
            <img src={producto.imagen} alt={producto.nombre} className="imgProd" />
        </picture>
        <header>
            <h2>{producto.nombre}</h2>
        </header>
        <section>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
        </section>
        <footer>
           <Link to={"detalle/" + producto.id} className="btnDetalles">Ver detalles</Link>
        </footer>
    </article>
  )
}

export default Item