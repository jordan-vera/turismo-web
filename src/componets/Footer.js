import React from 'react';
import imagPlay from '../assets/imagenes/playstore.png';
import logo from '../assets/imagenes/ico.png';
import logofacebook from '../assets/imagenes/facelogo.png';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid footer-all border-top">
                    <div className="row mt-5">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="texto-footer text-center">
                                <img src={logo} className="logo-footer rounded" />
                                <img src={logofacebook} className="logo-footer rounded ms-3" />
                                <br />
                                <label className="mt-2">Los mejores lugares turísticos estan aquí.</label>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center ">
                            <h5>Descarga la app de Lugares Turísticos</h5>
                            <img src={imagPlay} className="image-play-store" />
                        </div>
                    </div>
                </div>
                <div className="text-center pt-4 pb-4 m-0 footer-fin">
                    Copyright © 2021 | Lugares Turísticos
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;