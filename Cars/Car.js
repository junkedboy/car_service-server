import { Schema, model } from 'mongoose'

const Car = new Schema({
    manufacturer: {type: String, required: true, ref: 'car_manufacturers'},
    model: {type: String, required: true}
})

export default model('Cars', Car)