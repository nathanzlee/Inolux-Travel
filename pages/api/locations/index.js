import connectDB from '../../../util/connectDB'
import Locations from '../../../models/location'

connectDB()

export default async function handler(req, res){
    await getLocations(req, res)
}

const getLocations = async (req, res) => {
    try {
        const locations = await Locations.find()
        res.json({ data: locations })
    } catch (err) {
        res.json({err: err})
    }
}
