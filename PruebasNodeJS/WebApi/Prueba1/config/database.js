//Cargando el modulo de mongoose
import mongoose, { connect, Promise } from 'mongoose';
//Configurando la conexion para MongoDB, Debemos indicar el puerto y la IP de nuestra BD 
const mongoDB = 'mongodb://172.17.0.2:27017/BinaryChaos';
connect(mongoDB);
Promise = global.Promise;
export default mongoose;