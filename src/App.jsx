import "./App.css"
import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() { 

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Nuestros productos"}/>} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
