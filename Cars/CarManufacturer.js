import { Schema, model } from 'mongoose'

const CarManufacturer = new Schema({
    manufacturer: {type: String, unique: true, required: true},
})

export default model('car_manufacturer', CarManufacturer)