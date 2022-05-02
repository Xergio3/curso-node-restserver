const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app= express();
        this.port=process.env.APP_PORT;
        this.usuariosPath='/api/usuarios';


        //Middlewares
        this.middlewares();


        //rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        //directorio público 

        this.app.use(cors());

        //Lectura y parseo de body
        this.app.use(express.json() );
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
        
        }
    

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',this.port);
        });
    }
}


module.exports= Server;
