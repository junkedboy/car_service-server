import { Schema, model } from 'mongoose'

const User = new Schema({
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    roles: [{type: String, ref: 'car'}]
})

export default model('users', User)