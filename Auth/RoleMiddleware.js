import jwt from 'jsonwebtoken'
import { secretKey } from '../config.js'

export default function (roles) {
    return function(req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]
            
            if (!token) {
                return res.status(403).json({message: "Користувач не авторизований (відсутній токен)"})
            }
            const { roles: userRoles } = jwt.verify(token, secretKey)
            let hasRole = false
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: "У вас немає доступу"})
            }
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "Користувач не авторизований (catch)"})
        }
    }
}