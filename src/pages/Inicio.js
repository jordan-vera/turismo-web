import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/imagenes/logo.png'
import CategoriasCarrusel from '../componets/CategoriasCarrusel';
import LugaresDestacados from "../componets/LugaresDestacados";
import LugaresRecientes from "../componets/LugaresRecientes";

class Inicio extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid navbar-index">
                    <div className="row">
                        <div className="col-lg-1 text-center">
                            <Link to={"/"}>
                                <img src={Logo} className="image-logo m-2 rounded" />
                            </Link>

                        </div>
                        <div className="col-lg-4 pt-1">
                            <input className="form-control mt-2" placeholder="Buscar lugares turísticos" />
                        </div>
                        <div className="col-lg-4 pt-1">
                            <button className="btn btn-light mt-2 me-3">
                                <i className="fas fa-bars"></i> Categorías
                            </button>
                            <button className="btn btn-light mt-2 me-3">
                                <i className="fas fa-globe-americas"></i> Buscar por país
                            </button>
                        </div>
                        <div className="col-lg-3 pt-1 text-end ">
                            <button className="btn btn-outline-light mt-2 me-3">Registrarse</button>
                            <button className="btn btn-outline-light mt-2 me-3">Ingresar</button>
                        </div>
                    </div>
                </div>
                <CategoriasCarrusel></CategoriasCarrusel>
                <LugaresDestacados></LugaresDestacados>
                <LugaresRecientes></LugaresRecientes>
            </React.Fragment>
        )
    }
}

export default Inicio;