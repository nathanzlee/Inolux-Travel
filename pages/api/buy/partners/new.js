import connectDB from '../../../../util/connectDB'
import Partner from '../../../../models/partner'

connectDB()

export default async function handler(req, res){
    await newPartner(req, res)
}

async function newPartner(req, res) {
    try {
        const newPartner = new Partner({
            ...req.body,
            dateAdded: new Date()
        })
        await newPartner.save()
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}
