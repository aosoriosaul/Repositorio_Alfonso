// Cargamos el módulo de mongoose
import { Schema as _Schema, model } from 'mongoose';
//Definimos el esquema
const Schema = _Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const VideogameSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 released_on: {
  type: Date,
  trim: true,
  required: true
 }
});
// Exportamos el modelo para usarlo en otros ficheros
export default model('Videogame', VideogameSchema)