import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav">
            <h3>Logo Ecommerce</h3>
            <div>
                <button>Botón 1</button>
                <button>Botón 2</button>
                <button>Botón 3</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar