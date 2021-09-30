import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Inicio from './pages/Inicio';
import Footer from './componets/Footer';
import CategoriaZonas from './pages/CategoriaZonas';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/index" component={Inicio} />
          <Route exact path="/categoria-lugar/:idcategoria" component={CategoriaZonas} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
