import exoress from 'express'
import userController from '../controllers/userController';
import userRouter from './userRouter';
import codeRouter from './codeRouter';
import chuyenbayRouter from './chuyenbayRouter';



let router = exoress.Router()

let initWebRoutes = (app) => {

    // /api/login
    router.post('/api/login', userController.handleLogin)
    // /api/ms-user
    router.use('/api/ms-user', userRouter)
    // /api/ms-code
    router.use('/api/ms-code', codeRouter)

    // /api/ms-chuyenbay
    router.use('/api/ms-chuyenbay', chuyenbayRouter)

    return app.use('/', router)
}

module.exports = initWebRoutes