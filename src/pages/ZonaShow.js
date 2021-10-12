import React from 'react';
import Navbar from '../componets/Nav';
import urlGlobal from "../services/urlGlobal";
import apiLugares from "../services/ZonasService";

class ZonaShow extends React.Component {
    state = {
        loading: false,
        error: true,
        lugar: {}
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.getZonasOne(params.idzona);
    }

    getZonasOne = async (idzona) => {
        this.setState({ loading: true });
        try {
            const data = await apiLugares.Lugares.one(idzona);
            this.setState({ loading: false, error: false, lugar: data.response });
            console.log(data.response)
        } catch (error) {
            this.setState({ loading: false, error: true });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className="container contenedor-categoria rounded p-3 mt-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-portada">
                                <img src={urlGlobal.UrlGlobal.urlImage + this.state.lugar.portada} className="w-100 rounded" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>{this.state.lugar.nombre}</h3>
                            <p className="text-justificado">{this.state.lugar.descripcion}</p>
                            <b>Dirección:</b>
                            <p className="text-justificado mb-1">{this.state.lugar.direccion}</p>
                            <p className="text-justificado">{this.state.lugar.referencia}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ZonaShow;