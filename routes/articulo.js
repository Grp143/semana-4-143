/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();


// router.get('/list', articuloController.list);

router.get('/list', articuloController.list);

router.post('/add', auth.verifyUsuario, articuloController.add); // usa middlewere para verificar que tenga rol admin
router.put('/update',auth.verifyUsuario, articuloController.update);

router.put('/activate',auth.verifyUsuario, articuloController.activate);
router.put('/deactivate',auth.verifyUsuario, articuloController.deactivate);


module.exports = router;