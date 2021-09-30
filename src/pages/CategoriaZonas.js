import React from "react";
import Navbar from "../componets/Nav";
import apiCategoria from "../services/CategoriaService";
import { useParams } from "react-router-dom";

function CategoriaZonas() {
    let { idcategoria } = useParams();
    var categoria;

    const getCategoria = async () => {
        const data = await apiCategoria.Categoria.one(idcategoria);
        categoria = data.response;
        console.log(categoria)
    }

    getCategoria();
    return (
        <React.Fragment>
            <Navbar></Navbar>
            dfkgjbkjljlj
        </React.Fragment>
    )
}

export default CategoriaZonas;