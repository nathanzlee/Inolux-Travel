import connectDB from '../../../../../util/connectDB'
import TravelAuth from '../../../../../models/travelAuth'

connectDB()

export default async function handler(req, res) {
    if (req.body.status == 'denied') {
        await denyTravelAuth(req, res)
    } else {
        await authorizeTravelAuth(req, res)
    }
}

const authorizeTravelAuth = async (req, res) => {
    try {
        if (req.body.role == 'manager') {
            await TravelAuth.updateOne({_id: req.query.id}, {$set: {'managerSig.signature': req.body.signature, 'managerSig.date': req.body.date, status: req.body.status, notes: req.body.notes}})
        } else {
            await TravelAuth.updateOne({_id: req.query.id}, {$set: {'presidentSig.signature': req.body.signature, 'presidentSig.date': req.body.date, status: req.body.status, notes: req.body.notes}})
        }
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

const denyTravelAuth = async (req, res) => {
    try {
        if (req.body.role == 'manager') {
            await TravelAuth.updateOne({_id: req.query.id}, {$set: {'managerSig.signature': '', 'managerSig.date': null, status: 'denied'}})
        } else {
            await TravelAuth.updateOne({_id: req.query.id}, {$set: {'presidentSig.signature': '', 'presidentSig.date': null, status: 'denied'}})
        }
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}