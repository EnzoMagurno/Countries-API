const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const mainRouter = Router();
const countriesRouter = require('./countriesRouter');
// Configurar los routers
mainRouter.use('/countries', countriesRouter);

module.exports = mainRouter;
