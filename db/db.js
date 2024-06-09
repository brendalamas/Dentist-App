const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URI = `mongodb+srv://${process.env.USER_BBDD}:${process.env.PASS_BBDD}@cluster0.phi35lz.mongodb.net/${process.env.LabOdontologico}?retryWrites=true&w=majority&appName=Cluster0`;

const conectarDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('BBDD conectada correctamente');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

conectarDB();