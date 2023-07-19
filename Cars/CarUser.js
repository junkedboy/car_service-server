import { Schema, model } from 'mongoose'

const CarUser = new Schema({
    user: {type: String, required: true, ref: 'users'},
    car: {type: String, required: true, ref: 'Cars'},
    year: {type: Number, required: true},
    plate: {type: String},
    vin: {type: String},
})

export default model('cars__user', CarUser)