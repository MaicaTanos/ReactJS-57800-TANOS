import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {

    const agregarCarrito = (contador) => {
        const productoCarrito ={...producto, cantidad: contador}
        console.log(productoCarrito)
    }

  return (
    <div className='itemDetalle'>
        <img src={producto.imagen} alt= {producto.nombre} className='detImg' />
        <h1 className='tituloDet'>{producto.nombre}</h1>
        <article className='precioDesc'> 
            <h2>${producto.precio}</h2>
            <h3>{producto.descripcion}</h3>
        </article>

        <ItemCount stock={producto.stock} agregarCarrito={agregarCarrito}/>
    </div>
  )
}

export default ItemDetail

