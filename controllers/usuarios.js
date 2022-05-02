const {response } = require('express');

const usuariosGet=(req,res=response)=>{

    const {q, nombre='No Name', apikey,page=1,limit} = req.query;
    res.json({
        msg:'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuarioPost=(req,res=response)=>{
    const {nombre,edad,id,page, limit=1} = req.body;

    res.status(201).json({

        msg:'post API',
        nombre,
        edad,
        id
    });
}

const usuariosPut=(req,res=response)=>{

    const {id}=req.params;
    res.status(400).json({
        msg:'put API',
        id
    });
}

const usuariosPatch=(req,res=response)=>{
    res.json({
        msg:'patch API'
    });
}
const usuariosDelete=(req,res=response)=>{
    res.json({
        msg:'Delete API'
    });
}



module.exports = {
    usuariosGet,
    usuarioPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
