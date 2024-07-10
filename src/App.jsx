import "./App.css"
import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {
 

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
      </div>
    </>
  )
}

export default App
