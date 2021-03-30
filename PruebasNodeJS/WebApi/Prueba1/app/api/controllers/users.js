// Cargamos el modelo recien creado
import { create as _create, findOne } from '../models/users';
// Cargamos el módulo de bcrypt
import { compareSync } from 'bcrypt'; 
// Cargamos el módulo de jsonwebtoken
import { sign } from 'jsonwebtoken';

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
export function create(req, res, next) {

    _create({ nombre: req.body.nombre, email: req.body.email, password: req.body.password }, function (err, result) {
        if (err)
            next(err);

        else
            res.json({ status: "Ok", message: "Usuario agregado exitosamente!!!", data: null });

    });
}
export function authenticate(req, res, next) {
    findOne({ email: req.body.email }, function (err, userInfo) {
        if (err) {
            next(err);
        } else {
            if (compareSync(req.body.password, userInfo.password)) {
                const token = sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({ status: "Ok", message: "El usuario ha sido autenticado!!!", data: { user: userInfo, token: token } });
            } else {
                res.json({ status: "error", message: "Invalid email/password!!", data: null });
            }
        }
    });
}