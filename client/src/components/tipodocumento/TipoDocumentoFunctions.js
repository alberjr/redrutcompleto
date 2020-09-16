import axios from 'axios'
import React, {Component} from 'react'
export const getTipoDocumentos = ()=>{
    return axios.post('api/listtipodocumentos',{
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

