const express =require('express');
const app = express();
const cors = require('cors');




app.use(express.json());
app.use(cors());
const rutasPacientes = require('./rutas/paciente');

app.set('port', process.env.PORT || 4000);



app.get('/', (req,res) => {

 res.send('Halo every');

});
app.use('/Paciente',rutasPacientes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;
