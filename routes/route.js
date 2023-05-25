const express = require('express');

const router = express.Router();

const data = require('../controller/data.js')


router.post ('/add',data)

module.exports = router;