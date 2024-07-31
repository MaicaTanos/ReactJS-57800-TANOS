import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {

    const agregarCarrito = (contador) => {
        const productoCarrito ={...producto, cantidad: contador}
        console.log(productoCarrito)
    }

  return (
    <div>
        <img src={producto.imagen} alt= {producto.nombre} />
        <h2>{producto.nombre}</h2>

        <ItemCount stock={producto.stock} agregarCarrito={agregarCarrito}/>
    </div>
  )
}

export default ItemDetail

// const ItemDetail = ({id, detalle, nombre, categoria, imagen, precio, stock}) => {
//   return (
//     <article>
//         <header>
//             <h2>{nombre}</h2>
//         </header>
//         <picture>
//             <img src={imagen} alt={nombre} />
//         </picture>
//         <section>
//             <p>Categoría: {categoria}</p>
//             <p>Descripción: {detalle}</p>
//             <p>Precio: ${precio}</p>
//         </section>
//         <footer>
//             <ItemCount initial={1} stock={stock} onAdd={(quantity => console.log("Cantidad agregada ", quantity))}/>
//         </footer>
//     </article>
//   )
// }

