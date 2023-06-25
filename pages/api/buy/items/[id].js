import connectDB from '../../../../util/connectDB'
import Item from '../../../../models/item'

connectDB()

export default async function handler(req, res){
    switch(req.method){
        case "POST":
          await saveItem(req, res)
          break;
        case "GET":
          await getItem(req, res)
          break;
      }
}
  
const getItem = async (req, res) => {
    try {
        const item = await Item.findOne({_id: req.query.id})
        res.json(item)
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

const saveItem = async (req, res) => {
    try {
        await Item.updateOne({_id: req.query.id}, {$set: {...req.body}})
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}