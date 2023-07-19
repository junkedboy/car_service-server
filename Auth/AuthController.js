import User from './User.js'
import Role from './Role.js'
import bcrypt from 'bcryptjs' // хешування паролю
import { validationResult } from 'express-validator' // бібліотека для валідацій
import jwt from 'jsonwebtoken'
import { secretKey } from '../config.js'

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles,
    }
    return jwt.sign(payload, secretKey, {expiresIn: "24h"})
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req) 
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Помилка при реєстрації", errors})
            }
            const { login, password, name } = req.body // дістали з тіла запроса поля login і password
            const candidate = await User.findOne({ login }) // спробували знайти такого користувача у базі
            // якщо такий користувач вже є - повертаємо помилку
            if (candidate) { 
                res.status(400).json({message: 'Користувач з таким логіном уже існує'})
            }
            // створюємо нового користувача
            const hashPassword = bcrypt.hashSync(password, 7) // хешируємо пароль
            const userRole = await Role.findOne({value: "USER"}) // дістаємо роль з таблиці ролей користувачів
            const user = new User({ login: login.toLowerCase(), password: hashPassword, name: name, roles: [userRole.value] }) // створюємо користувача
            // console.log(user)
            await User.create(user) // додаємо користувача в базу
            return res.json({message: 'Користувач успішно зареєстрований'})
        } catch (e) {
            console.log(e.message)
            res.status(400).json({message: 'Помилка реєстрації'})
        }
    }  
    async login(req, res) {
        try {
            const { login, password } = req.body
            const user = await User.findOne({ login: login })
            if (!user) {
                return res.status(400).json({message: `Користувача ${login} не знайдено`})
            }
            const validPassword = bcrypt.compareSync(password, user.password) // порівнюємо введений пароль з тим що у базі
            if (!validPassword) { 
                return res.status(400).json({message: 'Неправильний пароль'})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({ token })
        } catch (e) {
            console.log(e.message)
            res.status(400).json({message: 'Помилка авторизації'})
        }
    } 
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e.message)
        }
    } 
}

export default new AuthController()