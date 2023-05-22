import exoress from 'express'
import ChangBayController from '../controllers/changbayController'

let router = exoress.Router()

router.post('/them-changbay', ChangBayController.handleCreateChangBay)
router.get('/danhsach-changbay', ChangBayController.handleGetChangBay)
router.put('/chinhsua-changbay', ChangBayController.handleEditChangBay)
router.delete('/xoa-changbay', ChangBayController.handleDeleteChangBay)

module.exports = router
