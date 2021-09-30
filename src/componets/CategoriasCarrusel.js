import React from "react";
import { Link } from "react-router-dom";
import apiCategoria from "../services/CategoriaService";
import urlCategoria from "../services/urlGlobal"

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
            this.setState({ loading: false, error: false, categorias: data.response });
        } catch (error) {
            this.setState({ loading: false, error: true });
        }
    }

    spinner = () => {
        if (this.state.loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    Cargando...
                </div>
            );
        } else {
            return;
        }
    }

    componentDidMount() {
        this.getCategorias();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container testimonial-categoria contenedor-categoria rounded mt-2">
                    <div className="row p-2" >
                        {
                            this.state.categorias.map((categoria) => {
                                return (
                                    <div className="col-1 p-1" key={categoria.idcategoria}>
                                        <Link to={"/categoria-lugar/" + categoria.idcategoria} style={{ textDecoration: 'none' }}>
                                            <div className="border rounded text-center pt-1 bg-white card-categoria">
                                                <img className="img-categoria rounded" src={urlCategoria.UrlGlobal.urlImageCategorias + categoria.image} />
                                                <br />
                                                <small className="texto-categoria">{categoria.categoria}</small>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {this.spinner()}
                </div>
            </React.Fragment>
        )
    }
}

export default CategoriasCarrusel;