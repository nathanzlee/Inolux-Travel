import connectDB from '../../../../util/connectDB'
import Partner from '../../../../models/partner'

connectDB()

export default async function handler(req, res){
    switch(req.method){
        case "POST":
          await savePartner(req, res)
          break;
        case "GET":
          await getPartner(req, res)
          break;
      }
  }
  
const getPartner = async (req, res) => {
    try {
        const partner = await Partner.findOne({_id: req.query.id})
        res.json(partner)
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

const savePartner = async (req, res) => {
    try {
        await Partner.updateOne({_id: req.query.id}, {$set: {...req.body}})
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}