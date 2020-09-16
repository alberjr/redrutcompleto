import React, {Component} from 'react'
import {getProfile} from './UserFunctions'
class Profile extends Component {
    constructor(){
        super()
        this.state={
            name:'', 
            tipo:'',
            email:'',
            password:'',
            imei:'',
            tdocumento:'',
            documento:'',
            estado:''
        }

        getProfile().then(res=>{
            this.setState({
                name:res.user.name,  
                tipo:res.user.user_tipo,
                email:res.user.email,
                password:res.user.password,
                imei:res.user.user_imei,
                tdocumento:res.user.user_tdocumento,
                documento:res.user.user_documento,
                estado:res.user.user_estado
            })
        })
    }
    /*ComponentDidMount(){
        
        getProfile().then(res=>{
            this.setState({
                name:res.user.name,  
                tipo:res.user.user_tipo,
                email:res.user.email,
                password:res.user.password,
                imei:res.user.user_imei,
                tdocumento:res.user.user_tdocumento,
                documento:res.user.user_documento,
                estado:res.user.user_estado
            })
        })
    }*/

    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">Perfil</h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Tipo Usuario</td>
                                <td>{this.state.tipo}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>IMEI Dispositivo</td>
                                <td>{this.state.imei}</td>
                            </tr>
                            <tr>
                                <td>Tipo Documento</td>
                                <td>{this.state.tdocumento}</td>
                            </tr>
                            <tr>
                                <td>Documento</td>
                                <td>{this.state.documento}</td>
                            </tr>
                            <tr>
                                <td>Estado</td>
                                <td>{this.state.estado}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile