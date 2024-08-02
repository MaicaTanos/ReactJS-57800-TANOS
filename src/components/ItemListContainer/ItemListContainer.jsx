import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"




const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
        obtenerProductos()
        .then(respuesta => {
            if (categoriaId) {
                const filtroProductos = respuesta.filter((producto)=> producto.categoria === categoriaId)
                setProductos(filtroProductos)

            } else {
                setProductos(respuesta)
            }
            
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() =>{
            console.log("Finalizó la promesa")
        })
    }, [categoriaId])


    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer