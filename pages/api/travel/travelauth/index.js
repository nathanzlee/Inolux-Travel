import connectDB from '../../../../util/connectDB'
import User from '../../../../models/user'
import TravelAuth from '../../../../models/travelAuth'
import { getSession } from 'next-auth/react'

connectDB()

export default async function handler(req, res){
  await getTravelAuth(req, res)
}

const getTravelAuth = async (req, res) => {
  const session = await getSession({req})
  try {
    const user = await User.findOne({email: session.user.email}).populate('travelAuths').populate({path: 'travelAuths', populate: {path: 'managerSig', populate: {path: 'user'}}})
    const travel = await TravelAuth.find().populate('approveBy').populate({path: 'managerSig', populate: {path: 'user'}})
    let travelAuthList = []
    user.travelAuths.forEach(auth => travelAuthList.push(auth))
    travel.forEach(auth => {
      if (auth.approveBy.map(i => i.number).includes(user.number)) {
        travelAuthList.push(auth)
      }
    })
    res.json({ data: travelAuthList })
  } catch (err) {
    console.log(err)
    res.json({err: err})
  }
}