import React from "react";
import Logo from '../assets/imagenes/logo.png'
import { Link } from "react-router-dom";
import apiPais from "../services/PaisService";

class Navbar extends React.Component {
    state = {
        idpais: 1
    }

    getPaisExterna = async () => {
        try {
            const data = await apiPais.Pais.externo();
            let pais = data.country_name;
            if (pais == 'Ecuador') {
                this.setState({ idpais: 1 });
            } else if (pais == 'Colombia') {
                this.setState({ idpais: 2 });
            } else if (pais == 'Peru' || pais == 'Perú') {
                this.setState({ idpais: 3 });
            } else {
                this.setState({ idpais: 1 });
            }
        } catch (error) {
            this.setState({ idpais: 1 });
            console.log(error)
        }
    }

    componentDidMount() {
        this.getPaisExterna();
    }

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
            </React.Fragment>
        )
    }
}

export default Navbar;