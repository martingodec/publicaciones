const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.index );
router.post('/', indexController.datos1)



module.exports = router;
