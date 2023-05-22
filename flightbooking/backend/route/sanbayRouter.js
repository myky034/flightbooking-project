import exoress from 'express'
import SanbayController from '../controllers/sanbayController'

let router = exoress.Router()

router.post('/them-sanbay', SanbayController.handleCreateSanBay)
router.get('/danhsach-sanbay', SanbayController.handleGetSanbay)
router.put('/chinhsua-sanbay', SanbayController.handleEditSanbay)
router.delete('/xoa-sanbay', SanbayController.handleDeleteSanbay)

module.exports = router
