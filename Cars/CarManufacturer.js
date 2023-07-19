import { Schema, model } from 'mongoose'

const CarManufacturer = new Schema({
    title: {type: String, unique: true, required: true},
})

export default model('car_manufacturers', CarManufacturer)