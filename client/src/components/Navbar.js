import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'

class Navbar extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        localStorage.removeItem('usertipo')
        localStorage.removeItem('username')
        localStorage.removeItem('userid') 
        localStorage.removeItem('empresaid') 
        this.props.history.push('/login')
    }

    render(){
        const adminLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                 <Link to="/landig" className="nav-link">
                    Home
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/profile" className="nav-link">
                    Perfil Administrador
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/ListaUser" className="nav-link">
                    Usuarios
                 </Link>                 
                </li>
                <li className="nav-item">
                 <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                  Salir
                 </a>                 
                </li>
            </ul>
        )
        const directorLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                 <Link to="/landig" className="nav-link">
                    Home
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/profile" className="nav-link">
                    Perfil Director
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/ListaUser" className="nav-link">
                    Usuarios
                 </Link>                 
                </li>
                <li className="nav-item">
                 <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                  Salir
                 </a>                 
                </li>
            </ul>
        )
        const cordinadorLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                 <Link to="/landig" className="nav-link">
                    Home
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/profile" className="nav-link">
                    Perfil Cordinador
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/ListaUser" className="nav-link">
                    Usuarios
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/ListMacroruta" className="nav-link">
                    Macrorutas
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/ListRuta" className="nav-link">
                    Rutas
                 </Link>                 
                </li>
                <li className="nav-item">
                 <Link to="/ListReporte" className="nav-link">
                    Reportes
                 </Link>                 
                </li>
                <li className="nav-item">
                 <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                  Salir
                 </a>                 
                </li>
            </ul>
        )
        const userLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                 <Link to="/profile" className="nav-link">
                    Perfil
                 </Link>                 
                </li>
                <li className="nav-item">
                 <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                  Salir
                 </a>                 
                </li>
            </ul>
        )

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                        type="button"
                        data-togge="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div id="navbar1" className="collapse navbar-collapse justify-content-md-center">
                 
              
                {localStorage.usertoken? localStorage.usertipo==='1'? adminLink : localStorage.usertipo==='2'? directorLink: localStorage.usertipo==='3'? cordinadorLink : userLink: null}                   
                </div>
            </nav>
        )
    }

}
export default withRouter(Navbar)