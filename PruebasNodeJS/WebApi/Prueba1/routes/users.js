// Cargamos el modulo express
import { Router } from 'express';
const router = Router();
// Cargamos el controlador del usuario
import { create, authenticate } from '../app/api/controllers/users';
// Especificamos nuestras rutas teniendo en cuenta los metodos creados en nuestro controlador, y especificando que seran rutas que usaran el metodo POST
router.post('/register', create);
router.post('/authenticate', authenticate);
export default router;