import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import cors from 'cors'

const PORT = process.env.PORT || 3000
const LOGIN = 'user'
const PASSWD = '1234'
const DB_URL = `mongodb+srv://${LOGIN}:${PASSWD}@cluster0.plm2gdx.mongodb.net/car_service`

const app = express()
app.use(express.json()) // дає можливість парсити JSON який прилітає нас у запросах (вказуємо явно що хочемо приймати дані перетворені у JSON формат)
app.use(cors())
app.use('/api', router)


app.get('/', (req, res) => {
    console.log(req.query)
    res.status(200).json('CAR SERVICE SERVER WORKING')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()