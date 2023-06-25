import mongoose from 'mongoose'
import connectDB from '../../../../util/connectDB'
import PurchaseOrders from '../../../../models/purchaseOrder'
import Partners from '../../../../models/partner'
import Items from '../../../../models/item'
import Locations from '../../../../models/location'

connectDB()

export default async function handler(req, res){
    switch(req.method){
        case "POST":
          await newPurchaseOrder(req, res)
          break;
        case "GET":
          await getRefs(req, res)
          break;
      }
}
async function getRefs(req, res) {
    try {
        const partners = await Partners.find()
        const items = await Items.find()
        const locations = await Locations.find()
        res.json({ partners: partners, items: items, locations: locations })
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

async function newPurchaseOrder(req, res) {
    try {
        const items = req.body.items.map(row => {
            return {
                ...row,
                item: new mongoose.Types.ObjectId(row.item)
            }
        })
        const value = req.body.items.reduce((a, b) => a + b.amount, 0)
        console.log(req.body.vendor)
        const newOrder = new PurchaseOrders({
            ...req.body, 
            documentNo: 'ES1000',
            vendor: new mongoose.Types.ObjectId(req.body.vendor),
            items: items,
            value: value,
            status: 'placed'
        })
        console.log(newOrder)
        await newOrder.save()
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}
