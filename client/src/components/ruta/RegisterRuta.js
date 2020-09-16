import React, {Component} from 'react'
import Iframe from 'react-iframe'
import {register} from '../ruta/RutaFunctions'
import {getruta} from '../ruta/RutaFunctions'
import {update} from '../ruta/RutaFunctions'
const  qs  =  require ( 'query-string' );
class RegisterRuta extends Component {
    constructor(){
        super()
        this.state={
            nombres:'',
            lunes:'',
            martes:'',
            miercoles:'',
            jueves:'',
            viernes:'',
            sabado:'',
            domingo:'',
            empresa:localStorage.empresaid,
            pais:localStorage.empresapais,
            ciudad:localStorage.empresaciudad,
            estado:'1',
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
            this.state.titulo='Ruta'
        }else{
            if(this.state.oper === "e"){
                this.state.titulo='Actualizar Ruta'
            }else{
                this.state.titulo='Crear Ruta'
            }
            }                             
                            
        getruta(this.state.ident).then(res=>{ 
            if(res.ruta_user_creador!=localStorage.userid && this.state.oper!='r'  ){                 
                this.props.history.push('/ListRuta');          
            }else{
                this.setState({
                    nombres:res.ruta_name,
                    lunes:res.ruta_lunes_ind,
                    martes:res.ruta_martes_ind,
                    miercoles:res.ruta_miercoles_ind,
                    jueves:res.ruta_jueves_ind,
                    viernes:res.ruta_viernes_ind,
                    sabado:res.ruta_sabado_ind,
                    domingo:res.ruta_domingo_ind,
                    empresa:res.ruta_empresa_id,
                    pais:res.ruta_pais,
                    ciudad:res.ruta_ciudad,
                    estado:res.ruta_estado,
                    mapa:res.ruta_mapa,
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
        if(this.state.lunes==null){
            this.state.lunes='N';
        }
        if(this.state.martes==null){
            this.state.martes='N';
        }
        if(this.state.miercoles==null){
            this.state.miercoles='N';
        }
        if(this.state.jueves==null){
            this.state.jueves='N';
        }
        if(this.state.viernes==null){
            this.state.viernes='N';
        }
        if(this.state.sabado==null){
            this.state.sabado='N';
        }
        if(this.state.domingo==null){
            this.state.domingo='N';
        }
        this.state.empresa=localStorage.empresaid
        this.state.pais=localStorage.empresapais
        this.state.ciudad=localStorage.empresaciudad
        const newRuta={
            ruta_name: this.state.nombres,
            ruta_lunes_ind:this.state.lunes,
            ruta_martes_ind:this.state.martes,
            ruta_miercoles_ind:this.state.miercoles,
            ruta_jueves_ind:this.state.jueves,
            ruta_viernes_ind:this.state.viernes,
            ruta_sabado_ind:this.state.sabado,
            ruta_domingo_ind:this.state.domingo,
            ruta_empresa_id: this.state.empresa,
            ruta_pais: this.state.pais,
            ruta_ciudad: this.state.ciudad,
            ruta_estado: this.state.estado,
            ruta_mapa: this.state.mapa,
            ruta_user_creador: localStorage.userid,
        }
        console.log(newRuta)
        if(this.state.oper=='r'){
        register(newRuta).then(res=>{            
                this.props.history.push('/ListRuta')
            
        }).catch(err=>{
            console.log(err)
            alert("Error: "+err);
        }) 
        } 
        else{
            if(this.state.oper=='e'){
                update(newRuta,this.state.ident).then(res=>{            
                    window.alert('Ruta Editado.');
                
            }).catch(err=>{
                console.log(err)
                alert("Error: "+err);
            }) 
            } 
        }
    }

    

    render(){
        const htmlpage=(
            <div className="container-fluid">
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
                            <div className="row justify-content-center">
                            <div className="col-xs-2">
                                <label htmlFor="lunes">Lunes</label>
                                <select 
                                className="form-control"
                                name="lunes"
                                placeholder=""
                                value={this.state.lunes}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
                                <div className="col-xs-1">
                                <label htmlFor="martes">Martes</label>
                                <select 
                                className="form-control"
                                name="martes"
                                placeholder=""
                                value={this.state.martes}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
                                <div className="col-xs-1">
                                <label htmlFor="miercoles">Miercoles</label>
                                <select 
                                className="form-control"
                                name="miercoles"
                                placeholder=""
                                value={this.state.miercoles}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
                                <div className="col-xs-1">
                                <label htmlFor="jueves">Jueves</label>
                                <select 
                                className="form-control"
                                name="jueves"
                                placeholder=""
                                value={this.state.jueves}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
                                <div className="col-xs-1">
                                <label htmlFor="viernes">Viernes</label>
                                <select 
                                className="form-control"
                                name="viernes"
                                placeholder=""
                                value={this.state.viernes}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
                                <div className="col-xs-1">
                                <label htmlFor="sabado">Sabado</label>
                                <select 
                                className="form-control"
                                name="sabado"
                                placeholder=""
                                value={this.state.sabado}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
                                <div className="col-xs-1">
                                <label htmlFor="domingo">Domingo</label>
                                <select 
                                className="form-control"
                                name="domingo"
                                placeholder=""
                                value={this.state.domingo}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option value="N" >No</option>
                                <option value="S" >Si</option>
                                </select>
                                </div>
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

export default RegisterRuta