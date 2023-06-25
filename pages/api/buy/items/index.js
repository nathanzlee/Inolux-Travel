import connectDB from '../../../../util/connectDB'
import Items from '../../../../models/item'

connectDB()

export default async function handler(req, res){
    await getItems(req, res)
}

const getItems = async (req, res) => {
    try {
        const items = await Items.find()
        res.json({ data: items })
    } catch (err) {
        res.json({err: err})
    }
}
