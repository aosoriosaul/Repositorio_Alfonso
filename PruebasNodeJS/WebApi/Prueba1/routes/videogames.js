// Cargamos el modulo express
import { Router } from 'express';
const router = Router();
// Cargamos el controlador de videojuegos
import { getAll, create, getById, updateById, deleteById } from '../app/api/controllers/videogames';
// Especificamos nuestras rutas teniendo en cuenta los metodos creados en nuestro controlador
router.get('/', getAll);
router.post('/', create);
router.get('/:videogameId', getById);
router.put('/:videogameId', updateById);
router.delete('/:videogameId', deleteById);
export default router;