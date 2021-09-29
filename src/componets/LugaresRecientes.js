import React from "react";
import apiLugares from "../services/ZonasService";
import urlGlobal from "../services/urlGlobal";

class LugaresRecientes extends React.Component {
    state = {
        loading: false,
        error: true,
        lugares: []
    }

    getLugaresRecientes = async () => {
        this.setState({ loading: true });
        try {
            const data = await apiLugares.Lugares.recientes();
            var arrayData = [];
            for(let i = 0; i < 18; i++) {
                arrayData.push(data.response[i]);
            }
            this.setState({ loading: false, error: false, lugares: arrayData })
        } catch (error) {
            this.setState({ loading: false, error: true })
        }
    }

    componentDidMount() {
        this.getLugaresRecientes();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-2 contenedor-categoria rounded pt-3">
                    <h5 className="border-bottom pb-2">
                        <i className="fas fa-globe-asia"></i> Lugares agregados recientemente
                    </h5>
                    <div className="row">
                        {
                            this.state.lugares.map((lugar) => {
                                return (
                                    <div className="col-2 p-1" key={lugar.idzona}>
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

export default LugaresRecientes;