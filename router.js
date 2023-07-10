import { Router } from "express";
import CategoryController from "./ServicesList/CategoryController.js"
import ServiceController from "./ServicesList/ServiceController.js"
import AuthController from "./Auth/AuthController.js"
import { check } from "express-validator"
import CarController from "./Cars/CarController.js"
import RoleMiddleware from "./Auth/RoleMiddleware.js"
import CarManufacturerController from "./Cars/CarManufacturerController.js"

const router = new Router()

// auth
router.post('/reqistration', [
    check('login', "Логін не може не менше 2 і не більше 15 символів").notEmpty().isLength({min: 2, max: 15}),
    check('password', "Пароль має бути не коротше 4 символів і не менше 10 символів").isLength({min: 4, max: 10})
],AuthController.registration)
router.post('/login', AuthController.login)
router.get('/users', RoleMiddleware(['ADMIN']), AuthController. getUsers)
// service category
router.post('/category', CategoryController.create)
router.get('/category', CategoryController.getAll)
router.get('/category/:id', CategoryController.getOne)
router.put('/category', CategoryController.update)
router.delete('/category/:id', CategoryController.delete)
// service
router.post('/services', ServiceController.create)
router.get('/services', ServiceController.getAll)
router.get('/services/:id', ServiceController.getOne)
router.put('/services', ServiceController.update)
router.delete('/services/:id', ServiceController.delete)
// cars
router.post('/cars', CarController.create)
router.get('/cars', CarController.getAll)
// car manufacturer
router.post('/carmanufacturer', CarManufacturerController.create)
router.get('/carmanufacturer', CarManufacturerController.getAll)

export default router