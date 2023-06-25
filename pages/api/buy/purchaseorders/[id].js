import connectDB from '../../../../util/connectDB'
import PurchaseOrders from '../../../../models/purchaseOrder'

connectDB()

export default async function handler(req, res){
    switch(req.method){
        case "POST":
          await savePurchaseOrder(req, res)
          break;
        case "GET":
          await getPurchaseOrder(req, res)
          break;
      }
  }
  
const getPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await PurchaseOrders.findOne({_id: req.query.id})
        res.json(purchaseOrder)
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

const savePurchaseOrder = async (req, res) => {
    try {
        await PurchaseOrders.updateOne({_id: req.query.id}, {$set: {...req.body}})
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}