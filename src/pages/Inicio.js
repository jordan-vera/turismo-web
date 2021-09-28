import React from "react";
import Logo from '../assets/imagenes/logo.png'
import CategoriasCarrusel from '../componets/CategoriasCarrusel';

class Inicio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid navbar-index">
                    <div className="row">
                        <div className="col-lg-2 text-center">
                            <img src={Logo} className="image-logo m-2 rounded" />
                        </div>
                        <div className="col-lg-5 pt-1">
                            <input className="form-control mt-2" placeholder="Buscar lugares turísticos" />
                        </div>
                        <div className="col-lg-2 pt-1">
                            <button className="btn btn-light mt-2 me-3">
                                <i class="fas fa-bars"></i> Categorías
                            </button>
                        </div>
                        <div className="col-lg-3 pt-1 text-end">
                            <button className="btn btn-outline-light mt-2 me-3">Registrarse</button>
                            <button className="btn btn-outline-light mt-2 me-3">Ingresar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <CategoriasCarrusel></CategoriasCarrusel>
            </React.Fragment>
        )
    }
}

export default Inicio;