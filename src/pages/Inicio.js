import React from "react";
import CategoriasCarrusel from '../componets/CategoriasCarrusel';
import LugaresDestacados from "../componets/LugaresDestacados";
import LugaresRecientes from "../componets/LugaresRecientes";
import Navbar from "../componets/Nav";

class Inicio extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <CategoriasCarrusel></CategoriasCarrusel>
                <LugaresDestacados></LugaresDestacados>
                <LugaresRecientes></LugaresRecientes>
            </React.Fragment>
        )
    }
}

export default Inicio;