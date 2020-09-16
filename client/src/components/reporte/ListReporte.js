import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {getReportes,deleteReporte} from '../reporte/ReporteFunctions'
class ListaReportes extends Component {
    constructor(){
        super()
        this.state={reportes:''
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount(){
      getReportes().then(res=>{
        console.log(res);
            this.setState({
              reportes:res
            });
            
        });
        
        
    }
    
    handleClick(idCurrent) {
      
      deleteReporte(idCurrent).then(res=>{
        alert(res);
        document.getElementById('reporte'+idCurrent).remove();
      }).catch(err=>{
        console.log(err)
        alert('Error al eliminar reporte.');
    });
    }

    alertaCoordinador(){
      alert('Seccion solo para coordinadores.');
      this.props.history.push('/landing')
    }

    tabRow(){
        //console.log(this.state.users);
        if(this.state.reportes instanceof Array){
          return this.state.reportes.map(reporte=>{
              return (<tr id={'reporte'+reporte.id}key={reporte.id}>
                <td><a href={"RegisterReporte?id="+reporte.id+"&ac=v"}>{reporte.id}</a></td>
                <td>{reporte.ruta_name}</td>
                <td>{reporte.name}</td>
                <td>{reporte.reporte_cumplimiento==true?'Si':'No'}</td>
                <td>{reporte.created_at}</td>
                <td>{reporte.updated_at}</td>
                <td><a href={"RegisterReporte?id="+reporte.id+"&ac=e"} title="Editar datos" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true">Editar</span></a></td>
                <td><button  title="Eliminar"  onClick={ this.handleClick.bind(this, reporte.id)} className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash" aria-hidden="true">Eliminar</span></button></td>

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
              <div className="col-md-10"><h2 >Reportes</h2></div>
              <div className="col-md-2">
              <Link   to="/RegisterReporte" >Crear Reporte</Link>
              </div>
            </div>
    
            <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <td>Id</td>
                    <td >Nombre Ruta</td>
                    <td >Transportador</td>                    
                    <td >Cumplimiento</td>                  
                    <td >Creación</td>
                    <td >Actualización</td>
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

export default ListaReportes