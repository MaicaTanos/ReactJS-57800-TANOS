import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/rincon-verde-logo.png"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" >
            <img src={logo} alt="Logo de la tienda" />
            </Link>

            <ul>
                <Link to="/categoria/Interior">
                <p>De interior</p>
                </Link>

                <Link to="/categoria/Exterior">
                <p>De exterior</p>
                </Link>
                
                <Link to="/categoria/Macetas">
                <p>Macetas</p>
                </Link>

                <Link to="/categoria/Accesorios">
                <p>Accesorios</p>
                </Link>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar