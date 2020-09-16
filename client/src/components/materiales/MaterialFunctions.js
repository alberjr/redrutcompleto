import axios from 'axios'
import React, {Component} from 'react'
export const getMateriales = ()=>{
    return axios.post('api/indexmaterial',{
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

