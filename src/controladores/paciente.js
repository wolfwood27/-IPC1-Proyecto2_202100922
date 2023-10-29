const fs = require('fs');
const controlador = {};

controlador.crearpaciente = (req, res) => {
    //Recuperando la data que viene del cliente
    const data = req.body;

    //validar si ya existe el archivo binario llamadao usuarios.bin
    if (fs.existsSync('pacientes.bin')) {

        //Si existe, leer el archivo binario
        const buffer = fs.readFileSync('pacientes.bin');
        const dataAnterior = JSON.parse(buffer.toString());

        //Agregar la nueva data al arreglo
        dataAnterior.push(data);

        //Ingresando mi arreglo en un archivo binario
        const bufferNuevo = Buffer.from(JSON.stringify(dataAnterior));
        fs.writeFileSync('pacientes.bin', bufferNuevo);
        return res.send('Creando usuarios desde el controlador si existe');
    }

    //Ingresando la data en un arreglo
    const arreglo = [];
    arreglo.push(data);

    //Ingresando mi arreglo en un archivo binario
    const buffer = Buffer.from(JSON.stringify(arreglo));
    fs.writeFileSync('pacientes.bin', buffer);

    return res.send('Creando usuarios desde el controlador');
}

controlador.leerpaciente = (req, res) => {
    //Leyendo el archivo binario
    const buffer = fs.readFileSync('pacientes.bin');
    const data = JSON.parse(buffer.toString());

    res.send(data);
}

controlador.actualizarPaciente = (req, res) => {
    const data = req.body;
    const pacienteid = req.params.id;
    //validar si ya existe el archivo binario llamadao usuarios.bin
    if (fs.existsSync('pacientes.bin')) {

        //Si existe, leer el archivo binario
        const buffer = fs.readFileSync('pacientes.bin');
        const dataAnterior = JSON.parse(buffer.toString());

        //Actualizar el usuario
        const dataNueva = dataAnterior.map((paciente) => {
            if (paciente.id == pacienteid) {
                return data;
            }
            return paciente;
        });

        //Ingresando mi arreglo en un archivo binario
        const bufferNuevo = Buffer.from(JSON.stringify(dataNueva));
        fs.writeFileSync('pacientes.bin', bufferNuevo);
        return res.send('Actualizando pacientes desde el controlador si existe');
    }
    return res.send('No existe el archivo');
}



module.exports = controlador;