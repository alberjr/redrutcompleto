import React, {Component} from 'react'
import {register} from './UserFunctions'
import {getuser} from './UserFunctions'
import {update} from './UserFunctions'
import {getTipoDocumentos} from './tipodocumento/TipoDocumentoFunctions'
import {getEmpresas} from './empresa/EmpresaFunctions'
const  qs  =  require ( 'query-string' );
class Register extends Component {
    constructor(){
        super()
        this.state={
            nombres:'', 
            apellidos:'', 
            tipo:'',
            email:'',
            password:'',
            imei:'',
            tdocumento:'',
            documento:'',
            fnacimiento:'',
            empresa:'',
            pais:'',
            ciudad:'',
            estado:'1',
            tdocumentos:'',
            oper:'r',
            ident:'',
            empresas:'',
            titulo:'',
        }

        this.onChange= this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    componentDidMount(){
        this.state.oper=qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).ac;
        this.state.ident=qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).id;            
        if(this.state.oper==null){
            this.state.oper='r' 
        }
        if(this.state.oper == "v"){
            this.state.titulo='Usuario'
        }else{
            if(this.state.oper === "e"){
                this.state.titulo='Actualizar Usuario'
            }else{
                this.state.titulo='Crear Usuario'
            }
            } 
        getuser(this.state.ident).then(res=>{            
            this.setState({
                nombres:res.name, 
                tipo:res.user_tipo,
                email:res.email,
                imei:res.user_imei,
                tdocumento:res.user_tdocumento,
                documento:res.user_documento,
                fnacimiento:res.user_fecha_nacimiento,
                empresa:res.user_empresa_id,
                pais:res.user_pais,
                ciudad:res.user_ciudad,
                estado:res.user_estado
            });
        });
        getTipoDocumentos().then(res=>{            
            this.setState({
                tdocumentos:res
            });
        });

        getEmpresas().then(res=>{            
            this.setState({
                empresas:res
            });
        });
        
        
    }

    tdoc(){
        if(this.state.tdocumentos instanceof Array){
            return this.state.tdocumentos.map(row=>{
                return (<option value={row.tdocumentos_codigo} key={'tdoc'+row.tdocumentos_codigo} >{row.tdocumentos_desc}</option>);                    
            }); 
          } 

    }
    empr(){
        if(this.state.empresas instanceof Array){
            return this.state.empresas.map(row=>{
                return (<option value={row.empresa_id} key={'empr'+row.empresa_id} >{row.empresa_desc}</option>);                    
            }); 
          } 

    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        if(this.state.estado==null){
            this.state.estado='1';
        }
        if(localStorage.usertipo=='2'){
            this.state.empresa=localStorage.empresaid;
        }else{
            if(localStorage.usertipo!='1'){
                this.state.empresa=localStorage.empresaid;
                this.state.pais=localStorage.empresapais;
                this.state.ciudad=localStorage.empresaciudad;
            }
        }
        const newUser={
            name: this.state.nombres,
            user_tipo: this.state.tipo,
            email: this.state.email,
            password: this.state.password,            
            user_imei: this.state.imei,
            user_tdocumento: this.state.tdocumento,
            user_documento: this.state.documento,
            user_fecha_nacimiento: this.state.fnacimiento,
            user_empresa_id: this.state.empresa,
            user_pais: this.state.pais,
            user_ciudad: this.state.ciudad,
            user_estado: this.state.estado,
            user_user_creador: localStorage.userid,
        }
        console.log(newUser)
        if(this.state.oper=='r'){
            console.log(newUser)
        register(newUser).then(res=>{            
                this.props.history.push('/listauser')
            
        }).catch(err=>{
            console.log(err)
        }) 
        } 
        else{
            if(this.state.oper=='e'){
                update(newUser,this.state.ident).then(res=>{            
                    window.alert('Usuario Editado.');
                
            }).catch(err=>{
                console.log(err)
            }) 
            } 
        }
    }

    

    render(){
        const htmlpage=(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                            {this.state.titulo}
                            </h1>
                            <div className="form-group">
                                <label htmlFor="nombres">Nombre</label>
                                <input type="text"
                                className="form-control"
                                name="nombres"
                                placeholder="Ingresar Nombres"
                                value={this.state.nombres}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"}
                                />
                            </div>

                            <div className="form-group">
                            <label htmlFor="tipo">Tipo de Usuario</label>
                                <select className="form-control"
                                 name="tipo"
                                 placeholder="Ingresar Tipo de Usuario"
                                 value={this.state.tipo}
                                 onChange={this.onChange}
                                 disabled={this.state.oper == "v"}>
                                 <option default> ---- Seleccionar Tipo de Usuario---- </option>
                                { localStorage.usertipo==='1'?<option value="2" selected={this.state.tipo == "2"}>Director</option>:" "}
                                { localStorage.usertipo==='1'||localStorage.usertipo==='2'?<option value='3' selected={this.state.tipo == '3'}>Coordinador</option>:" "}
                                { localStorage.usertipo==='1'||localStorage.usertipo==='3'?<option value='4' selected={this.state.tipo == '4'}>Transportador</option>:" "}
                                
                                 </select>
                            </div>  
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Ingresar Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"}
                                />
                            </div>
                            {this.state.oper === 'v'||this.state.oper === 'e'?
                            <input type="hidden"
                            className="form-control"
                            name="password"
                            placeholder="Ingresar Contraseña"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                            :
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
                            }
                            <div className="form-group">
                                <label htmlFor="imei">IMEI del Dispositivo</label>
                                <input type="text"
                                className="form-control"
                                name="imei"
                                placeholder="Ingresar IMEI del Dispositivo"
                                value={this.state.imei}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"}
                                />
                            </div>  

                            <div className="form-group">
                                <label htmlFor="tdocumento">Tipo de Documento</label>
                                <select className="form-control"
                                 name="tdocumento"
                                 placeholder="Ingresar Tipo de Documento"
                                 value={this.state.tdocumento}
                                 onChange={this.onChange}
                                 disabled={this.state.oper == "v"}> 
                                 <option default> ---- Seleccionar Tipo de Documento---- </option>                                
                                 {this.tdoc()}
                                 </select>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="documento">Documento de Identidad</label>
                                <input type="text"
                                className="form-control"
                                name="documento"
                                placeholder="Ingresar Documento de Identidad"
                                value={this.state.documento}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"}
                                />
                            </div> 
                            <div className="form-group">
                                <label htmlFor="fnacimiento">Fecha Nacimiento</label>
                                <input type="date"
                                className="form-control"
                                name="fnacimiento"
                                placeholder="Ingresar Fecha Nacimiento"
                                value={this.state.fnacimiento}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"}
                                />
                            </div> 
                            <div className="form-group">
                                <label htmlFor="empresa">Empresa</label>
                                <select className="form-control"
                                 name="empresa"
                                 placeholder="Ingresar Empresa"
                                 value={this.state.oper != "v"||this.state.oper != "e"?localStorage.usertipo!='1'?localStorage.empresaid:this.state.empresa:this.state.empresa}
                                 onChange={this.onChange}
                                 disabled={this.state.oper == "v"||localStorage.usertipo!='1'}>
                                 <option default> ---- Seleccionar Empresa---- </option>
                                 {this.empr()}
                                 </select>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="pais">Pais Empresa</label>
                                <input type="text"
                                className="form-control"
                                name="pais"
                                placeholder="Ingresar Pais de la Empresa"
                                value={this.state.oper != "v"||this.state.oper != "e"?localStorage.usertipo=='3'?localStorage.empresapais:this.state.pais:this.state.pais}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"||localStorage.usertipo=='3'}
                                />
                            </div> 
                            <div className="form-group">
                                <label htmlFor="ciudad">Ciudad Empresa</label>
                                <input type="text"
                                className="form-control"
                                name="ciudad"
                                placeholder="Ingresar Ciudad de la Empresa"
                                value={this.state.oper != "v"||this.state.oper != "e"?localStorage.usertipo=='3'?localStorage.empresaciudad:this.state.ciudad:this.state.ciudad}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"||localStorage.usertipo=='3'}
                                />
                            </div> 
                            <div className="form-group">
                                <label htmlFor="estado">Estado</label>
                                <select 
                                className="form-control"
                                name="estado"
                                placeholder="Ingresar Estado"
                                value={this.state.estado}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="1" >Activo</option>
                                <option value="0" >Inactivo</option>
                                </select>
                            </div> 
                            {this.state.oper === "v"?
                            <button type="submit" className="btn btn-lg btn-primary btn-block" hidden="hidden">Registrar</button>
                            :<button type="submit" className="btn btn-lg btn-primary btn-block" >{this.state.oper === "e"?"Actualizar":"Registrar"}</button>}
                            </form>
                    </div>                
                </div>
            </div>
        )

        return(
            <div>
            {localStorage.usertoken? localStorage.usertipo==='1'||localStorage.usertipo==='2'||localStorage.usertipo==='3'? htmlpage: this.props.history.push('/login'): this.props.history.push('/login')}                
            </div>  
        )
    }
}

export default Register