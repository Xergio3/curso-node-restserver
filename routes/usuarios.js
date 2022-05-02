const { Router } = require('express');
const { usuariosGet, usuarioPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuarioPost);

router.patch('/', usuariosPatch);

router.patch('/',usuariosDelete);


module.exports=router;