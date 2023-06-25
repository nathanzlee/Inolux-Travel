import connectDB from '../../../util/connectDB'
import Locations from '.././../../models/location'

connectDB()

export default async function handler(req, res){
    await newLocation(req, res)
}

async function newLocation(req, res) {
    try {
        const newLocation = new Locations(req.body)
        await newLocation.save()
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}
