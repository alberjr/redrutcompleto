import axios from 'axios'

export const register = newReporte=>{
return axios.post('api/createreporte',newReporte,{

    headers:{'Content-Type':'application/json'}
})
.then(res=>{
    console.log(res)
    return res.data
})
.catch(err=>{
    console.log(err)
    alert("Error: "+err);
})

}

export const agregar = newCompra=>{
    return axios.post('api/createcompra',newCompra,{
    
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(err=>{
        console.log(err)
        alert("Error: "+err);
    })
    
    }
export const getCompras = (idreporte)=>{
    return axios.post('api/indexcompra',{
        reporteid:idreporte
    },{
    
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(err=>{
        console.log(err)
        alert("Error: "+err);
    })
    
    }


        export const getReportes = ()=>{
            return axios.post('api/indexreporte',{
                userid:localStorage.userid,
                usertipo:localStorage.usertipo
            },{
            
                headers:{'Content-Type':'application/json'}
            })
            .then(res=>{
                console.log(res)
                return res.data
            })
            .catch(err=>{
                console.log(err)
                alert("Error: "+err);
            })
            
            }
            export const deleteReporte = (idcurrent)=>{
                console.log(idcurrent)
                return axios.post('api/destroyreporte',{
                    reporteid:idcurrent
                },{
                
                    headers:{'Content-Type':'application/json'}
                })
                .then(res=>{
                    console.log(res)
                    return res.data
                })
                .catch(err=>{
                    console.log(err)
                    alert("Error: "+err);
                })
                
                }
                
            export const deleteCompra = (idreporte,idmaterial)=>{
                return axios.post('api/destroycompra',{
                    compraxruta_idreporte:idreporte,
                    compraxruta_idmaterial:idmaterial
                },{
                
                    headers:{'Content-Type':'application/json'}
                })
                .then(res=>{
                    console.log(res)
                    return res.data
                })
                .catch(err=>{
                    console.log(err)
                    alert("Error al eliminar.")
                })
                
                }
                export const getreporte = (idcurrent)=>{
                    return axios.post('api/getreporte',{
                        reporteid:idcurrent,
                    },{
                    
                        headers:{'Content-Type':'application/json'}
                    })
                    .then(res=>{
                        console.log(res)
                        return res.data
                    })
                    .catch(err=>{
                        console.log(err)
                        alert("Error: "+err);
                    })
                    
                    }
                    export const update = (reporteedit,idcurrent)=>{
                        return axios.post('api/updatereporte',{
                            reporte:reporteedit,
                            id:idcurrent

                        },{
                        
                            headers:{'Content-Type':'application/json'}
                        })
                        .then(res=>{
                            console.log(res)
                            return res.data
                        })
                        .catch(err=>{
                            console.log(err)
                            alert("Error: "+err);
                        })
                        
                        }