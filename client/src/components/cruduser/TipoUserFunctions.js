import axios from 'axios'
export const getUsers = ()=>{
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
        alert("Error: "+err);
    })
    
    }