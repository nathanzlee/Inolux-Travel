import connectDB from '../../../../util/connectDB'
import Item from '../../../../models/item'

connectDB()

export default async function handler(req, res){
    await newItem(req, res)
}

async function newItem(req, res) {
    try {
        const newItem = new Item({
            ...req.body,
            EAN: parseFloat(req.body.EAN),
            UPC: parseFloat(req.body.UPC),
            unitCost: parseFloat(req.body.unitCost)
        })
        await newItem.save()
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}
