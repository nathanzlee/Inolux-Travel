import connectDB from '../../../../../util/connectDB'
import TravelAuth from '../../../../../models/travelAuth'

connectDB()

export default async function handler(req, res) {
    await editTravelAuth(req, res)
}

const editTravelAuth = async (req, res) => {
    try {
        await TravelAuth.updateOne({_id: req.query.id}, {$set: {...req.body}})
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}