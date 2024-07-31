import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/rincon-verde-logo.png"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" >
            <img src={logo} alt="Logo de la tienda" className="logoimg" />
            </Link>

            <ul className="btncateg">
                <Link to="/categoria/Interior" className="btn">
                <p>De interior</p>
                </Link>

                <Link to="/categoria/Exterior" className="btn">
                <p>De exterior</p>
                </Link>
                
                <Link to="/categoria/Macetas" className="btn">
                <p>Macetas</p>
                </Link>

                <Link to="/categoria/Accesorios" className="btn
                ">
                <p>Accesorios</p>
                </Link>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar