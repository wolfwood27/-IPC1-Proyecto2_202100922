const express= require('express')
const router = express.Router();


const controlador= require('../controladores/paciente');


router.get('/', controlador.leerpaciente);

router.put('/:id', controlador.actualizarPaciente);

router.post('/', controlador.crearpaciente);

module.exports = router;