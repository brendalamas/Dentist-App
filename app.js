const express = require('express');
const consultorioRouter = require('./routers/consultorioRouter');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

//Middleware
app.use(cors());

app.use('/api/consultorio', consultorioRouter);
//Routers
app.get('/', (req, res) => {
    res.send('Servidor CRUD para citas Consultorio - 200 ok!!')
});


app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
});