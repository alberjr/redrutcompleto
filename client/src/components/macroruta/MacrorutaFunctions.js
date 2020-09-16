import axios from 'axios'

export const register = newMacroruta=>{
return axios.post('api/createmacroruta',newMacroruta,{

    headers:{'Content-Type':'application/json'}
})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

}


        export const getMacrorutas = ()=>{
            return axios.post('api/indexmacroruta',{
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
            export const setMacrorutaStatusInactive = (idcurrent)=>{
                console.log(idcurrent)
                return axios.post('api/destroymacroruta',{
                    macrorutaid:idcurrent
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
                export const getmacroruta = (idcurrent)=>{
                    return axios.post('api/getmacroruta',{
                        macrorutaid:idcurrent,
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
                    export const update = (macrorutaedit,idcurrent)=>{
                        return axios.post('api/updatemacroruta',{
                            macroruta:macrorutaedit,
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