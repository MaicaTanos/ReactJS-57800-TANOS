import React, { useEffect, useState } from 'react'
import obtenerProductos from '../../data/data.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {idProducto} = useParams()
    
  
    useEffect( () => {

        obtenerProductos()
        .then((data) => {
            const productoEncotrado = data.find((productoData) => productoData.id === idProducto)
            setProducto(productoEncotrado)
        })
    }, [])
  
  
    return (
    
        <ItemDetail producto={producto} />
    
  )
}

export default ItemDetailContainer