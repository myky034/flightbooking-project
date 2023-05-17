import exoress from 'express'
import HangveController from '../controllers/hangveController'

let router = exoress.Router()

router.post('/them-hangve', HangveController.handleCreateHangVe)
router.get('/danhsach-hangve', HangveController.handleGetHangVe)
router.put('/chinhsua-hangve', HangveController.handleEditHangVe)
router.delete('/xoa-hangve', HangveController.handleDeleteHangVe)

module.exports = router
