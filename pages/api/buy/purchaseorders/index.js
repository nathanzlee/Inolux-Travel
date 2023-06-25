import connectDB from '../../../../util/connectDB'
import PurchaseOrders from '../../../../models/purchaseOrder'

connectDB()

export default async function handler(req, res){
    await getPurchaseOrders(req, res)
}

const getPurchaseOrders = async (req, res) => {
    try {
        const purchaseOrders = await PurchaseOrders.find().populate('vendor')
        res.json({ data: purchaseOrders })
    } catch (err) {
        res.json({err: err})
    }
}
