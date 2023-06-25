import connectDB from '../../../../util/connectDB'
import PurchaseOrders from '../../../../models/purchaseOrder'

connectDB()

export default async function handler(req, res){
    await getReference(req, res)
}

const getReference = async (req, res) => {
    try {
        const items = await PurchaseOrders.findOne({documentNo: 'ES1000'}).populate('vendor').populate({path: 'items', populate: {path: 'item'}})
        res.json({ data: items })
    } catch (err) {
        res.json({err: err})
    }
}
