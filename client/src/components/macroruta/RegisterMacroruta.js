import React, {Component} from 'react'
import Iframe from 'react-iframe'
import {register} from '../macroruta/MacrorutaFunctions'
import {getmacroruta} from '../macroruta/MacrorutaFunctions'
import {update} from '../macroruta/MacrorutaFunctions'
const  qs  =  require ( 'query-string' );
class RegisterMacroruta extends Component {
    constructor(){
        super()
        this.state={
            nombres:'',
            empresa:localStorage.empresaid,
            pais:localStorage.empresapais,
            ciudad:localStorage.empresaciudad,
            estado:'1',
            map:'',
            oper:'r',
            ident:'',
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
        console.log(this.state.oper)
        if(this.state.oper == "v"){
            this.state.titulo='Macro Ruta'
        }else{
            if(this.state.oper === "e"){
                this.state.titulo='Actualizar Macro Ruta'
            }else{
                this.state.titulo='Crear Macro Ruta'
            }
            }                             
                            
        getmacroruta(this.state.ident).then(res=>{ 
            if(res.macroruta_user_creador!=localStorage.userid && this.state.oper!='r'  ){                 
                this.props.history.push('/ListMacroruta');          
            }else{
                this.setState({
                    nombres:res.macroruta_name,
                    empresa:res.macroruta_empresa_id,
                    pais:res.macroruta_pais,
                    ciudad:res.macroruta_ciudad,
                    estado:res.macroruta_estado,
                    mapa:res.macroruta_mapa,
                });
            }
        });
        
        
        
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        
        if(this.state.estado==null){
            this.state.estado='1';
        }
        this.state.empresa=localStorage.empresaid
        this.state.pais=localStorage.empresapais
        this.state.ciudad=localStorage.empresaciudad
        const newMacroRuta={
            macroruta_name: this.state.nombres,
            macroruta_empresa_id: this.state.empresa,
            macroruta_pais: this.state.pais,
            macroruta_ciudad: this.state.ciudad,
            macroruta_estado: this.state.estado,
            macroruta_mapa: this.state.mapa,
            macroruta_user_creador: localStorage.userid,
        }
        console.log(newMacroRuta)
        if(this.state.oper=='r'){
        register(newMacroRuta).then(res=>{            
                this.props.history.push('/ListMacroruta')
            
        }).catch(err=>{
            console.log(err)
            alert("Error: "+err);
        }) 
        } 
        else{
            if(this.state.oper=='e'){
                update(newMacroRuta,this.state.ident).then(res=>{            
                    window.alert('Macro Ruta Editado.');
                
            }).catch(err=>{
                console.log(err)
                alert("Error: "+err);
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
                            <div className="form-group">
                                <label htmlFor="mapa">Código Mapa</label>
                                <textarea 
                                className="form-control"
                                name="mapa"
                                placeholder="Ingresar Mapa"
                                value={this.state.mapa}
                                onChange={this.onChange}
                                readOnly={this.state.oper == "v"}
                                />
                            </div>
                            <div className="form-group" id="pintarmapa">
                            <Iframe url={this.state.mapa}
                                width="100%"
                                height="400px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"/>
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
            {localStorage.usertoken? localStorage.usertipo==='3'? htmlpage: this.props.history.push('/login'): this.props.history.push('/login')}                
            </div>  
        )
    }
}

export default RegisterMacroruta