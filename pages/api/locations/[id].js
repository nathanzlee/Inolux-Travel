import connectDB from '../../../util/connectDB'
import Location from '../../../models/location'

connectDB()

export default async function handler(req, res){
    switch(req.method){
        case "POST":
          await saveLocation(req, res)
          break;
        case "GET":
          await getLocation(req, res)
          break;
      }
}
  
const getLocation = async (req, res) => {
    try {
        const location = await Location.findOne({_id: req.query.id})
        res.json(location)
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

const saveLocation = async (req, res) => {
    try {
        await Location.updateOne({_id: req.query.id}, {$set: {...req.body}})
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}