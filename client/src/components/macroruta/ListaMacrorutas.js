import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {getMacrorutas,setMacrorutaStatusInactive} from '../macroruta/MacrorutaFunctions'
class ListaMacrorutas extends Component {
    constructor(){
        super()
        this.state={marorutas:''
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount(){
      getMacrorutas().then(res=>{
        console.log(res);
            this.setState({
              marorutas:res
            });
            
        });
        
        
    }
    
    handleClick(idCurrent) {
      
      setMacrorutaStatusInactive(idCurrent).then(res=>{
        alert(res);
        document.getElementById("estado"+idCurrent).textContent='Inactivo';
      }).catch(err=>{
        console.log(err)
        alert('Error al inactivar macroruta.');
    });
    }

    alertaCoordinador(){
      alert('Seccion solo para coordinadores.');
      this.props.history.push('/landing')
    }

    tabRow(){
        //console.log(this.state.users);
        if(this.state.marorutas instanceof Array){
          return this.state.marorutas.map(maroruta=>{
              return (<tr key={maroruta.id}>
                <td><a href={"RegisterMacroruta?id="+maroruta.id+"&ac=v"}>{maroruta.macroruta_name}</a></td>
                <td><span className={maroruta.macroruta_estado==="1"?"label label-success":"label label-warning"} id={"estado"+maroruta.id}>{maroruta.macroruta_estado==="1"?'Activo':'Inactivo'}</span></td>
                <td>{maroruta.created_at}</td>
                <td>{maroruta.updated_at}</td>
                <td><a href={"RegisterMacroruta?id="+maroruta.id+"&ac=e"} title="Editar datos" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true">Editar</span></a></td>
                <td><button  title="Eliminar"  onClick={ maroruta.macroruta_estado==0?null:this.handleClick.bind(this, maroruta.id)} className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash" aria-hidden="true">Inactivar</span></button></td>

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
              <div className="col-md-10"><h2 >Macro Rutas</h2></div>
              <div className="col-md-2">
              <Link   to="/RegisterMacroruta" >Crear Macro Ruta</Link>
              </div>
            </div>
    
            <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Estado</td>
                    <td >Fecha Creación</td>
                    <td >Fecha Actualización</td>
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

export default ListaMacrorutas