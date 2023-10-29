const fs = require('fs');
const controlador = {};

controlador.crearUsuario = (req, res) => {
    //Recuperando la data que viene del cliente
    const data = req.body;

    //validar si ya existe el archivo binario llamadao usuarios.bin
    if (fs.existsSync('usuarios.bin')) {

        //Si existe, leer el archivo binario
        const buffer = fs.readFileSync('usuarios.bin');
        const dataAnterior = JSON.parse(buffer.toString());

        //Agregar la nueva data al arreglo
        dataAnterior.push(data);

        //Ingresando mi arreglo en un archivo binario
        const bufferNuevo = Buffer.from(JSON.stringify(dataAnterior));
        fs.writeFileSync('usuarios.bin', bufferNuevo);
        return res.send('Creando usuarios desde el controlador si existe');
    }

    //Ingresando la data en un arreglo
    const arreglo = [];
    arreglo.push(data);

    //Ingresando mi arreglo en un archivo binario
    const buffer = Buffer.from(JSON.stringify(arreglo));
    fs.writeFileSync('usuarios.bin', buffer);

    return res.send('Creando usuarios desde el controlador');
}

controlador.leerUsuarios = (req, res) => {
    //Leyendo el archivo binario
    const buffer = fs.readFileSync('usuarios.bin');
    const data = JSON.parse(buffer.toString());

    res.send(data);
}

controlador.eliminarUsuario = (req, res) => {
    const usuarioId = req.params.id;
    //validar si ya existe el archivo binario llamadao usuarios.bin
    if (fs.existsSync('usuarios.bin')) {

        //Si existe, leer el archivo binario
        const buffer = fs.readFileSync('usuarios.bin');
        const dataAnterior = JSON.parse(buffer.toString());

        //Eliminar el usuario
        const dataNueva = dataAnterior.filter((usuario) => usuario.id != usuarioId);

        //Ingresando mi arreglo en un archivo binario
        const bufferNuevo = Buffer.from(JSON.stringify(dataNueva));
        fs.writeFileSync('usuarios.bin', bufferNuevo);
        return res.send('Eliminando usuarios desde el controlador si existe');
    }
    return res.send('No existe el archivo');
}

controlador.actualizarUsuario = (req, res) => {
    const data = req.body;
    const usuarioId = req.params.id;
    //validar si ya existe el archivo binario llamadao usuarios.bin
    if (fs.existsSync('usuarios.bin')) {

        //Si existe, leer el archivo binario
        const buffer = fs.readFileSync('usuarios.bin');
        const dataAnterior = JSON.parse(buffer.toString());

        //Actualizar el usuario
        const dataNueva = dataAnterior.map((usuario) => {
            if (usuario.id == usuarioId) {
                return data;
            }
            return usuario;
        });

        //Ingresando mi arreglo en un archivo binario
        const bufferNuevo = Buffer.from(JSON.stringify(dataNueva));
        fs.writeFileSync('usuarios.bin', bufferNuevo);
        return res.send('Actualizando usuarios desde el controlador si existe');
    }
    return res.send('No existe el archivo');
}

module.exports = controlador;