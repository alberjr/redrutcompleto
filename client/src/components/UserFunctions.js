import axios from 'axios'

export const register = newUser=>{
return axios.post('api/register',newUser,{

    headers:{'Content-Type':'application/json'}
})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

}

export const login = user=>{
    return axios.post('api/login',{
        email:user.email,
        password:user.password
    },{
    
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
            
        localStorage.setItem('usertoken',res.data.token) 
          
        console.log(res)        
    })
    /*.catch(err=>{
        console.log(err)
    })*/
    
    }

    export const getProfile = ()=>{
        return axios.get('api/profile',{
            
            headers:{Authorization: `Bearer ${localStorage.usertoken}`}
            
        })
        .then(res=>{
            console.log(res)
            return res.data
        })
        .catch(err=>{
            console.log(err)
        })
        
        }

        export const getUsers = ()=>{
            console.log(localStorage.userid)
            console.log(localStorage.usertipo)
            return axios.post('api/listusers',{
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
            export const setUserStatusInactive = (idcurrent)=>{
                console.log(idcurrent)
                return axios.post('api/destroyuser',{
                    userid:idcurrent
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
                export const getuser = (idcurrent)=>{
                    return axios.post('api/getuser',{
                        userid:idcurrent
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
                    export const update = (useredit,idcurrent)=>{
                        return axios.post('api/updateuser',{
                            user:useredit,
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