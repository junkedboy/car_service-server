import mongoose from 'mongoose'

const Service = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'services_categories', required: true},
    title: {type: String, required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true},
    time: {type: String, required: false},
    date: { type: Date, default: Date.now }
})

export default mongoose.model('services', Service)