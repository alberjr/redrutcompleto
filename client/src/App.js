import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
//import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ListaUser from './components/cruduser/ListaUser'
import ListaMacrorutas from './components/macroruta/ListaMacrorutas'
import RegisterMacroruta from './components/macroruta/RegisterMacroruta'
import ListaRutas from './components/ruta/ListaRutas'
import RegisterRuta from './components/ruta/RegisterRuta'
import ListReporte from './components/reporte/ListReporte'
import RegisterReporte from './components/reporte/RegisterReporte'

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Login}/>
          <div className="container">
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/listauser" component={ListaUser}/>
          <Route exact path="/listmacroruta" component={ListaMacrorutas}/>
          <Route exact path="/RegisterMacroruta" component={RegisterMacroruta}/>
          <Route exact path="/listruta" component={ListaRutas}/>
          <Route exact path="/RegisterRuta" component={RegisterRuta}/>
          <Route exact path="/listreporte" component={ListReporte}/>
          <Route exact path="/RegisterReporte" component={RegisterReporte}/>
          </div>
        </div>
      </Router>
    )
  }
}
export default App