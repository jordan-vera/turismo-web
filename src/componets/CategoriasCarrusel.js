import React from "react";
import apiCategoria from "../services/CategoriaService";

class CategoriasCarrusel extends React.Component {
    state = {
        categorias: [],
        loading: false,
        error: true
    }

    getCategorias = async () => {
        this.setState({ loading: true });
        try {
            const data = await apiCategoria.Categoria.all();
            console.log(data.response);
            this.setState({ loading: false, error: false, categorias: data.response });
        } catch (error) {
            this.setState({ loading: false, error: true });
        }
    }

    componentDidMount() {
        this.getCategorias();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container p-2 contenedor-categoria rounded">
                    <div className="row">
                        <div className="col-2 bg-info">jd</div>
                    </div>
                    mhbms
                </div>
            </React.Fragment>
        )
    }
}

export default CategoriasCarrusel;