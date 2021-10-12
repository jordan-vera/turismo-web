import React from "react";
import Navbar from "../componets/Nav";
import apiCategoria from "../services/CategoriaService";
import apiLugares from "../services/ZonasService";
import urlGlobal from "../services/urlGlobal";
import { Link } from "react-router-dom";

class CategoriaZonas extends React.Component {

    state = {
        loading: false,
        error: true,
        nombreCategoria: '',
        lugares: []
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.getCategoria(params.idcategoria);
        this.getZonasPorCategoria(params.idcategoria);
    }

    getCategoria = async (idcategoria) => {
        try {
            const data = await apiCategoria.Categoria.one(idcategoria);
            this.setState({ nombreCategoria: data.response.categoria });
        } catch (error) {
        }
    }

    getZonasPorCategoria = async (idcategoria) => {
        this.setState({ loading: true });
        try {
            const data = await apiLugares.Lugares.categoriaAll(idcategoria);
            this.setState({ loading: false, error: false, lugares: data.response });
            console.log(data)
        } catch (error) {
            this.setState({ loading: false, error: true });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className="container contenedor-categoria rounded p-3 mt-2">
                    <h5 className="border-bottom pb-2">{this.state.nombreCategoria}</h5>
                    <div className="row">
                        {
                            this.state.lugares.map((lugar) => {
                                return (
                                    <div className="col-2 p-1" key={lugar.idzona}>
                                        <Link to={"/zona-show/" + lugar.idzona} style={{ textDecoration: 'none', color: 'black' }}>
                                            <div className="border card-zona bg-white rounded p-1">
                                                <div className="box rounded">
                                                    <img src={urlGlobal.UrlGlobal.urlImage + lugar.portada} className="image-zona" />
                                                </div>
                                                <div className="nombre-zona">
                                                    <b>{lugar.nombre}</b>
                                                </div>
                                                <div className="descripcion-zona">
                                                    {lugar.descripcion}
                                                </div>
                                                <div className="canton-zona">
                                                    {lugar.canton}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


export default CategoriaZonas;