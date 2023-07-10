import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    title: {type: String, unique: true, required: true},
})

export default mongoose.model('services_categories', Category)