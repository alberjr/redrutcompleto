import React, {Component} from 'react'
import Iframe from 'react-iframe'
import {register, getCompras,agregar,deleteCompra} from '../reporte/ReporteFunctions'
import {getreporte} from '../reporte/ReporteFunctions'
import {update} from '../reporte/ReporteFunctions'
import {getRutas,getruta} from '../ruta/RutaFunctions'
import {getMateriales} from '../materiales/MaterialFunctions'
import {getUsers} from '../cruduser/TipoUserFunctions'
import { timingSafeEqual } from 'crypto'
const  qs  =  require ( 'query-string' );
class RegisterReporte extends Component {
    constructor(){
        super()
        this.state={
            idruta:'',
            idtrans:'',
            cumplimiento:'',
            oper:'r',
            ident:'',
            titulo:'',
            rutas:'',
            trans:'',
            compras:'',
            idmaterial:'',
            valor:'',
            peso:''
        }

        this.onChange= this.onChange.bind(this)
        this.onChangemapa= this.onChangemapa.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.onSubmitAgregar=this.onSubmitAgregar.bind(this)
    }

    componentDidMount(){
        this.state.oper=qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).ac;
        this.state.ident=qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).id;            
        if(this.state.oper==null){
            this.state.oper='r' 
        }
        console.log(this.state.oper)
        if(this.state.oper == "v"){
            this.state.titulo='Reporte'
        }else{
            if(this.state.oper === "e"){
                this.state.titulo='Actualizar Reporte'
            }else{
                this.state.titulo='Crear Reporte'
            }
            }                                           
        getreporte(this.state.ident).then(res=>{ 
            if(res.length>0){
            if(res[0].reporte_idusercreater!=localStorage.userid && this.state.oper!='r'  ){                 
                this.props.history.push('/ListReporte');          
            }else{
                this.setState({
                    idruta:res[0].reporte_idruta,
                    idtrans:res[0].reporte_iduser,
                    cumplimiento:res[0].reporte_cumplimiento,
                    mapa:res[0].ruta_mapa,
                });
            }
        }
        });
        getRutas(this.state.ident).then(res=>{
            console.log(res);
                this.setState({
                  rutas:res
                });
                
            });

            
        getMateriales().then(res=>{
            console.log(res);
                this.setState({
                  materiales:res
                });
                
            });
            getUsers().then(res=>{
                this.setState({
                    trans:res
                });
                
            }); 
            getCompras(this.state.ident).then(res=>{
                console.log(res);
                    this.setState({
                      compras:res
                    });
                    
                });
        
    }

    handleClick(idReporte,idMaterial) {
        deleteCompra(idReporte,idMaterial).then(res=>{
           const hijo=document.getElementById("material"+idMaterial);
            const padre = hijo.parentNode;
		    padre.removeChild(hijo);
        });
        
      }
    onChange(e){
        console.log(e)
        this.setState({[e.target.name]:e.target.value})
    }
    onChangemapa(e){
        
        this.setState({[e.target.name]:e.target.value})
        getruta(e.target.value).then(res=>{
            this.setState({['mapa']:res.ruta_mapa})
        });
    }

    onSubmitAgregar(e){
        e.preventDefault()
        if(this.state.ident!=null){
            if(document.getElementById("material"+this.state.idmaterial)==null){
            const newCompra={
                
                compraxruta_idreporte: this.state.ident,
                compraxruta_idmaterial:this.state.idmaterial,
                compraxruta_valor:this.state.valor,
                compraxruta_peso:this.state.peso,
            }
            console.log(newCompra)
            agregar(newCompra).then(res=>{   
                console.log(res);
                const material=document.getElementById("idmaterial").options[res.comprasxruta.compraxruta_idmaterial].text;
                console.log(material);
                const newRow={
                
                    compraxruta_idreporte: res.comprasxruta.compraxruta_idreporte,
                    compraxruta_idmaterial:res.comprasxruta.compraxruta_idmaterial,
                    material_name:material,
                    compraxruta_valor:res.comprasxruta.compraxruta_valor,
                    compraxruta_peso:res.comprasxruta.compraxruta_peso,
                }
                if(this.state.compras instanceof Array){
                    const ar=this.state.compras;
                    ar.push(newRow);
                    this.setState({
                        compras:ar
                      });
                }
                    alert("Material agregado.");
                
            }).catch(err=>{
                alert("Error: "+err);
            })
        }else{
            alert("No se puede repetir material.");
        } 
        }else{
            alert("Se debe guardar el reporte antes de agregar materiales.");
        }
    }

    onSubmit(e){
        e.preventDefault()
        
        
        const newReporte={
            
            reporte_idruta: this.state.idruta,
            reporte_iduser:this.state.idtrans,
            reporte_cumplimiento:this.state.cumplimiento,
            reporte_idusercreater:localStorage.userid,
        }
        console.log(newReporte)
        if(this.state.oper=='r'){
        register(newReporte).then(res=>{  
            this.setState({
                ident:res.reporte.id
              });       
                alert("Reporte actualizado.");
            
        }).catch(err=>{
            console.log(err)
            alert("Error: "+err);
        }) 
        } 
        else{
            if(this.state.oper=='e'){
                update(newReporte,this.state.ident).then(res=>{            
                    window.alert('Reporte Editado.');
                
            }).catch(err=>{
                console.log(err)
                alert("Error: "+err);
            }) 
            } 
        }
    }
    materiales(){
        if(this.state.materiales instanceof Array){
            return this.state.materiales.map(row=>{
                return (<option value={row.id} key={'material'+row.id} >{row.material_name}</option>);                    
            }); 
          } 

    }

    tabRow(){
        //console.log(this.state.users);
        if(this.state.compras instanceof Array){
          return this.state.compras.map(compra=>{
              console.log(compra)
              return (<tr id={'material'+compra.compraxruta_idmaterial}key={compra.compraxruta_idmaterial}>
                <td>{compra.material_name}</td>
                <td>{compra.compraxruta_valor}</td>
                <td>{compra.compraxruta_peso}</td>
                <td>{compra.compraxruta_peso*compra.compraxruta_valor}</td>
                <td><a title="Eliminar"  onClick={ this.handleClick.bind(this,compra.compraxruta_idreporte, compra.compraxruta_idmaterial)} className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash" aria-hidden="true" >Eliminar</span></a></td>

            </tr>);
 
          });
        }
      }

    rutas(){
        if(this.state.rutas instanceof Array){
            return this.state.rutas.map(row=>{
                return (<option value={row.id} key={'rutas'+row.id} >{row.ruta_name}</option>);                    
            }); 
          } 

    }
    trans(){
        if(this.state.trans instanceof Array){
            return this.state.trans.map(row=>{
                return (<option value={row.id} key={'trans'+row.id} >{row.name}</option>);                    
            }); 
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
                                <label htmlFor="idruta">Ruta</label>
                                <select className="form-control"
                                 name="idruta"
                                 placeholder="Ingresar Ruta"
                                 value={this.state.idruta}
                                 onChange={this.onChangemapa}
                                 disabled={this.state.oper == "v"}> 
                                 <option default> ---- Seleccionar Ruta---- </option>                                
                                 {this.rutas()}
                                 </select>
                            </div>    
                            <div className="form-group">
                                <label htmlFor="idtrans">Transportador</label>
                                <select className="form-control"
                                 name="idtrans"
                                 placeholder="Ingresar Transportador"
                                 value={this.state.idtrans}
                                 onChange={this.onChange}
                                 disabled={this.state.oper == "v"}> 
                                 <option default> ---- Seleccionar Transportador---- </option>                                
                                 {this.trans()}
                                 </select>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="cumplimiento">Cumplimiento</label>
                                <select 
                                className="form-control"
                                name="cumplimiento"
                                placeholder="Ingresar Cumplimiento"
                                value={this.state.cumplimiento}
                                onChange={this.onChange}
                                disabled={this.state.oper == "v"}
                                >
                                <option default> ---- Seleccionar Cumplimiento---- </option>
                                <option value="1" >Si</option>
                                <option value="0" >No</option>
                                </select>
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
                
                <div className="table-responsive">
                        <form noValidate onSubmit={this.onSubmitAgregar}>
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="idmaterial">Material</label>
                                                <select className="form-control"
                                                name="idmaterial"
                                                id="idmaterial"
                                                placeholder="Ingresar Material"
                                                value={this.state.idmaterial}
                                                onChange={this.onChange}
                                                disabled={this.state.oper == "v"}> 
                                                <option default> ---- Seleccionar Material---- </option>                                
                                                {this.materiales()}
                                                </select>
                                            </div>    
                                        </td>
                                        <td >
                                            <div className="form-group">
                                                <label htmlFor="valor">Valor</label>
                                                <input type="number"
                                                className="form-control"
                                                name="valor"
                                                placeholder="Ingresar Valor"
                                                value={this.state.valor==null?0:this.state.valor}
                                                onChange={this.onChange}
                                                readOnly={this.state.oper == "v"}
                                                />
                                            </div>
                                        </td>
                                        <td >
                                            <div className="form-group">
                                                <label htmlFor="peso">Peso</label>
                                                <input type="number"
                                                className="form-control"
                                                name="peso"
                                                placeholder="Ingresar Peso"
                                                value={this.state.peso==null?0:this.state.peso}
                                                onChange={this.onChange}
                                                readOnly={this.state.oper == "v"}
                                                />
                                            </div>
                                        </td>  
                                        <td >
                                            <div className="form-group">
                                                <label htmlFor="total">Total</label>
                                                <input type="number"
                                                className="form-control"
                                                name="total"
                                                placeholder="Ingresar Total"
                                                value={this.state.peso==null?0:this.state.valor==null?0:this.state.peso*this.state.valor}
                                                onChange={this.onChange}
                                                readOnly={true}
                                                />
                                            </div>
                                            </td>
                                            <td>
                                            <label > </label>
                                        {this.state.oper === "v"?
                            <button type="submit" className="btn btn-lg btn-primary btn-block" hidden="hidden">Agregar</button>
                            :<button type="submit" className="btn btn-lg btn-primary btn-block" >Agregar</button>}
                                        </td>  
                                        
                                    </tr>
                                    </thead>                                    
                                        <tbody id="bodymateriales">
                                        {this.tabRow()}
                                        </tbody>
                                </table> 
                                </form>   
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

export default RegisterReporte