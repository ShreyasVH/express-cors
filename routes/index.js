const express = require('express')

const index = require('../controllers')

const router = express.Router()

router.get('/api', index.get)
router.post('/api', index.post)
router.put('/api', index.put)
router.delete('/api', index.del)

module.exports = router