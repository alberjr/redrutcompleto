import React, {Component} from 'react'
import {login,getProfile} from './UserFunctions'


class Login extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            errors:{}
        }
        localStorage.removeItem('usertoken')
        localStorage.removeItem('usertipo')
        localStorage.removeItem('username')
        localStorage.removeItem('userid') 
        localStorage.removeItem('empresaid') 
        localStorage.removeItem('empresapais')
        localStorage.removeItem('empresaciudad') 
        this.onChange= this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user={
            email: this.state.email,
            password: this.state.password
        }
        console.log(user)
        login(user).then(res=>{     
            getProfile().then(res2=>{
                if(res2.user.user_estado=='1'){
                localStorage.setItem('usertipo',res2.user.user_tipo)
                localStorage.setItem('username',res2.user.name)  
                localStorage.setItem('userid',res2.user.id) 
                localStorage.setItem('empresaid',res2.user.user_empresa_id) 
                localStorage.setItem('empresapais',res2.user.user_pais) 
                localStorage.setItem('empresaciudad',res2.user.user_ciudad) 
                this.props.history.push('/landing')     
            }else{
                localStorage.removeItem('usertoken')
                localStorage.removeItem('usertipo')
                localStorage.removeItem('username')
                localStorage.removeItem('userid') 
                localStorage.removeItem('empresaid')
                localStorage.removeItem('empresapais')
                localStorage.removeItem('empresaciudad') 
                this.props.history.push('/login')
                }    
            }) .catch(err=>{
                console.log(err)                
                alert("Usuario o contraseña incorrecta.");
            })        
                      
               }).catch(err=>{
                console.log(err)                
                alert("Usuario o contraseña incorrecta.");
            })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Login
                            </h1>
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Ingresar Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Ingresar Contraseña"
                                value={this.state.password}
                                onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Entrar</button>
                        </form>
                    </div>                
                </div>
            </div>

        )
    }
}

export default Login