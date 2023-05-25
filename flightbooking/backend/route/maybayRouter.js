import exoress from 'express'
import maybayController from '../controllers/maybayController'

let router = exoress.Router()

router.post('/them-maybay', maybayController.handleCreateMayBay)
router.get('/danhsach-maybay', maybayController.handleGetMayBay)
router.put('/chinhsua-maybay', maybayController.handleEditMayBay)
router.delete('/xoa-maybay', maybayController.handleDeleteMayBay)

module.exports = router
