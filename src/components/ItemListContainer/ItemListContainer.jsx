import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import obtenerProductos from "../../data/data"
import { useParams } from "react-router-dom"




const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
        obtenerProductos()
        .then(response => {
            if (categoriaId) {
                const filtroPorductos = response.filter((producto)=> producto.categoria === categoriaId)
                setProductos(filtroPorductos)

            } else {
                setProductos(response)
            }
            
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() =>{
            console.log("Finalizó la promesa")
        })
    }, [categoriaId])


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer