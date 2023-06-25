import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    level: {type: Number},
    managers: {
        type: [mongoose.Schema.ObjectId],
        ref: 'user',
        default: []
    },
    department: {type: String},
    number: {type: Number},
    travelAuths: {
        type: [mongoose.Schema.ObjectId],
        ref: 'travelAuth',
        default: []
    }
})

const user = mongoose.models.user || mongoose.model('user', userSchema)

export default user