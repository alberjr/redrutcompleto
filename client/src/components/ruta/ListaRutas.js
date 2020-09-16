import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {getRutas,setRutaStatusInactive} from '../ruta/RutaFunctions'
class ListaRutas extends Component {
    constructor(){
        super()
        this.state={rutas:''
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount(){
      getRutas().then(res=>{
        console.log(res);
            this.setState({
              rutas:res
            });
            
        });
        
        
    }
    
    handleClick(idCurrent) {
      
      setRutaStatusInactive(idCurrent).then(res=>{
        alert(res);
        document.getElementById("estado"+idCurrent).textContent='Inactivo';
      }).catch(err=>{
        console.log(err)
        alert('Error al inactivar ruta.');
    });
    }

    alertaCoordinador(){
      alert('Seccion solo para coordinadores.');
      this.props.history.push('/landing')
    }

    tabRow(){
        //console.log(this.state.users);
        if(this.state.rutas instanceof Array){
          return this.state.rutas.map(ruta=>{
              return (<tr key={ruta.id}>
                <td><a href={"RegisterRuta?id="+ruta.id+"&ac=v"}>{ruta.ruta_name}</a></td>
                <td>{ruta.ruta_lunes_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td>{ruta.ruta_martes_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td>{ruta.ruta_miercoles_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td>{ruta.ruta_jueves_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td>{ruta.ruta_viernes_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td>{ruta.ruta_sabado_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td>{ruta.ruta_domingo_ind=='S'?<input type="checkbox" disabled="disabled" checked/>:<input type="checkbox" disabled="disabled" />}</td>
                <td><span className={ruta.ruta_estado==="1"?"label label-success":"label label-warning"} id={"estado"+ruta.id}>{ruta.ruta_estado==="1"?'Activo':'Inactivo'}</span></td>
                <td><a href={"RegisterRuta?id="+ruta.id+"&ac=e"} title="Editar datos" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true">Editar</span></a></td>
                <td><button  title="Eliminar"  onClick={ ruta.ruta_estado==0?null:this.handleClick.bind(this, ruta.id)} className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash" aria-hidden="true">Inactivar</span></button></td>

            </tr>);
 
          });
        }
      }
  

    render(){
        
        return (
            <div  className="container">
             {localStorage.usertoken? localStorage.usertipo==='3'? null:this.alertaCoordinador() : this.props.history.push('/login')}
         
          <div className="content"> 
          <br />
          <br />
            <div className="row">            
              <div className="col-md-10"><h2 >Rutas</h2></div>
              <div className="col-md-2">
              <Link   to="/RegisterRuta" >Crear Ruta</Link>
              </div>
            </div>
    
            <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <td>Nombre</td>
                    <td >Lunes</td>
                    <td >Martes</td>                    
                    <td >Miercoles</td>
                    <td >Jueves</td>                    
                    <td >Viernes</td>
                    <td >Sabado</td>                    
                    <td >Domingo</td>
                    <td>Estado</td>
                    <td ></td>
                    <td ></td>
                </tr>
                </thead>
                <tbody>
                  {this.tabRow()}
                </tbody>
            </table>
            </div>
            </div>
        </div>
        )
      }
    
}

export default ListaRutas