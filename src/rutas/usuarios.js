const express= require('express')
const router = express.Router();


const controlador= require('../controladores/usuarios');


router.get('/', (req,res) => {
    res.send('pos tamos probando a ver que pedo XD');

});

router.post('/', controlador.crearUsuario);



router.put('/', (req,res) => {
    res.send('editando user en el router');

});

router.delete('/', (req,res) => {
    res.send('ya lo elimino compa');

});

module.exports = router;
