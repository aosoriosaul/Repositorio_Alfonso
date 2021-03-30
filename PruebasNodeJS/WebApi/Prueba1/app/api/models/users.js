// Cargarmos el modulo mongoose
import { Schema as _Schema, model } from 'mongoose';
// Cargamos el modulo bcrypt
const bcrypt = requie('bcrypt');
// Definimos el factor de costo, el cual controla cuánto tiempo se necesita para calcular un solo hash de BCrypt. Cuanto mayor sea el factor de costo, más rondas de hash se realizan. Cuanto más tiempo sea necesario, más difícil será romper el hash con fuerza bruta.
const saltRounds = 10;
//Definimos los esquemas
const Schema = _Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const UserSchema = new Schema({
 nombre: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
});
// Antes de almacenar la contraseña en la base de datos la encriptamos con Bcrypt, esto es posible gracias al middleware de mongoose
UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
// Exportamos el modelo para usarlo en otros ficheros
export default model('User', UserSchema);