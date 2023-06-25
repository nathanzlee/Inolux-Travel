import connectDB from '../../../../util/connectDB'
import Partners from '../../../../models/partner'

connectDB()

export default async function handler(req, res){
    await getPartners(req, res)
}

const getPartners = async (req, res) => {
    try {
        const partners = await Partners.find()
        res.json({ data: partners })
    } catch (err) {
        res.json({err: err})
    }
}
