import exoress from 'express'
import chuyenbayController from '../controllers/chuyenbayController'

let router = exoress.Router()

router.post('/them-chuyenbay', chuyenbayController.handleCreateChuyenBay)
router.get('/danhsach-chuyenbay', chuyenbayController.handleGetChuyenBay)
router.put('/chinhsua-chuyenbay', chuyenbayController.handleEditChuyenBay)
router.delete('/xoa-chuyenbay', chuyenbayController.handleDeleteChuyenBay)

module.exports = router
