import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Inicio from './pages/Inicio';
import Footer from './componets/Footer';
import CategoriaZonas from './pages/CategoriaZonas';
import ZonaShow from './pages/ZonaShow';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/index" component={Inicio} />
          <Route exact path="/categoria-lugar/:idcategoria" component={CategoriaZonas} />
          <Route exact path="/zona-show/:idzona" component={ZonaShow} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
