import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {getUsers,Login,setUserStatusInactive} from '../UserFunctions'
class ListaUser extends Component {
    constructor(){
        super()
        this.state={users:''
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount(){
        getUsers().then(res=>{
            this.setState({
                users:res
            });
            
        });
        
        
    }
    
    handleClick(idCurrent) {
      
      setUserStatusInactive(idCurrent).then(res=>{
        alert(res);
        document.getElementById("estado"+idCurrent).textContent='Inactivo';
      }).catch(err=>{
        console.log(err)
        alert('Error al inactivar usuario.');
    });
    }

    tabRow(){
        //console.log(this.state.users);
        if(this.state.users instanceof Array){
          return this.state.users.map(user=>{
              return (<tr key={user.id}>
                <td><a href={"Register?id="+user.id+"&ac=v"}>{user.name}</a></td>
                <td>{user.user_tdocumento}</td>
                <td>{user.user_documento}</td>
                <td>{user.roll_desc}</td>
                <td>{user.empresa_desc}</td>
                <td>{user.user_pais}</td>
                <td>{user.user_ciudad}</td>
                <td><span className={user.user_estado==="1"?"label label-success":"label label-warning"} id={"estado"+user.id}>{user.user_estado==="1"?'Activo':'Inactivo'}</span></td>
                <td><a href={"Register?id="+user.id+"&ac=e"} title="Editar datos" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true">Editar</span></a></td>
                <td><button  title="Eliminar"  onClick={ user.user_estado==0?null:this.handleClick.bind(this, user.id)} className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash" aria-hidden="true">Inactivar</span></button></td>

            </tr>);
 
          });
        }
      }
  

    render(){
        
        return (
            <div  className="container">
             {localStorage.usertoken? localStorage.usertipo==='1'||localStorage.usertipo==='2'||localStorage.usertipo==='3'? null: this.props.history.push('/login'): this.props.history.push('/login')}
         
          <div className="content"> 
          <br />
          <br />
            <div className="row">            
              <div className="col-md-10"><h2 >Usuarios</h2></div>
              <div className="col-md-2">
              <Link   to="/Register" >Crear Usurio</Link>
              </div>
            </div>
    
            <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Tipo Documento</td>
                    <td>Documento</td>
                    <td>Tipo Usuario</td>
                    <td>Empresa</td>
                    <td>Pais</td>
                    <td>Ciudad</td>
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

export default ListaUser