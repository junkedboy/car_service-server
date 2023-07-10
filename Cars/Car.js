import { Schema, model } from 'mongoose'

const Car = new Schema({
    manufacturer: {type: String, required: true, ref: 'car_manufacturer'},
    model: {type: String, unique: true, required: true}
})

export default model('Cars', Car)