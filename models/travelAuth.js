import mongoose from 'mongoose'

const travelAuthSchema = mongoose.Schema({
    name: {type: String},
    number: {type: String},
    department: {type: String},
    reqDate: {type: Date},
    international: {type: Boolean},
    purpose: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    itinerary: {type: Array, default: []},
    travelAdv: {advance: {type: Boolean}, amount: {type: Number}},
    personalTravel: {personal: {type: Boolean}, startDate: {type: Date}, endDate: {type: Date}},
    approveBy: {
        type: [mongoose.Schema.ObjectId],
        ref: 'user'
    },
    employeeSig: {
        signature: {type: String}, 
        date: {type: Date}
    },
    managerSig: {
        user: {type: mongoose.Schema.ObjectId, ref: 'user'},
        signature: {type: String}, 
        date: {type: Date}
    },
    presidentSig: {
        type: {
            user: {type: mongoose.Schema.ObjectId, ref: 'user'},
            signature: {type: String}, 
            date: {type: Date}
        },
        default: null
    },
    notes: {type: String, default: ""},
    status: {type: String, default: "pending"}
})
mongoose.models = {}
const travel = mongoose.models.travelAuth || mongoose.model('travelAuth', travelAuthSchema)

export default travel