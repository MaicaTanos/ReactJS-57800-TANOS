import { useState } from "react"


const ItemCount = ({stock, agregarCarrito}) => {

    const [count, setCount] = useState(1)

    const aumentar = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const disminuir = () => {
        if(count > 1) {
            setCount (count - 1)
        }
    }


  return (
    <div>
        <div>
            <button onClick={disminuir}>-</button>
            <p>{count}</p>
            <button onClick={aumentar}>+</button>
        </div>
        <div>
            <button onClick={() => agregarCarrito(count) } disabled={!stock}>Agregar</button>
        </div>
    </div>
  )
}

export default ItemCount