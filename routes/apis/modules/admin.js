const { Router } = require('express')
const router = Router()

const adminController = require('../../../controllers/apis/admin-controller')

router.get('/restaurants', adminController.getRestaurants)

module.exports = router
