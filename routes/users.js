// const router = require('express').Router();
const routerx = require('express-promise-router');
const userController = require('../controllers/UserController.js');
const auth = require('../middlewares/auth');

const router = routerx();



router.get('/list',auth.verifyUsuario, userController.list);
router.post('/login', userController.login); //post envia datos
router.post('/register', auth.verifyUsuario, userController.register); // usa middlewere para verificar que tenga rol admin
router.put('/update',auth.verifyUsuario, userController.update);

module.exports = router;

