import axios from 'axios'

export const register = newRuta=>{
return axios.post('api/createruta',newRuta,{

    headers:{'Content-Type':'application/json'}
})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

}



        export const getRutas = ()=>{
            return axios.post('api/indexruta',{
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
            })
            
            }
            export const setRutaStatusInactive = (idcurrent)=>{
                console.log(idcurrent)
                return axios.post('api/destroyruta',{
                    rutaid:idcurrent
                },{
                
                    headers:{'Content-Type':'application/json'}
                })
                .then(res=>{
                    console.log(res)
                    return res.data
                })
                .catch(err=>{
                    console.log(err)
                })
                
                }
                export const getruta = (idcurrent)=>{
                    return axios.post('api/getruta',{
                        rutaid:idcurrent,
                    },{
                    
                        headers:{'Content-Type':'application/json'}
                    })
                    .then(res=>{
                        console.log(res)
                        return res.data
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    
                    }
                    export const update = (rutaedit,idcurrent)=>{
                        return axios.post('api/updateruta',{
                            ruta:rutaedit,
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
                        })
                        
                        }