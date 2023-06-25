import connectDB from '../../../../util/connectDB'
import User from '../../../../models/user'
import TravelAuth from '../../../../models/travelAuth'
import { getSession } from 'next-auth/react'
import { transporter, mailOptions } from '../../../../util/nodemailer'

connectDB()

export default async function handler(req, res){
    await newTravelAuth(req, res)
}

async function newTravelAuth(req, res) {
    // Create new travel auth with corresponding signature fields (international)
    // Populate approveBy field with corresponding managers based on session user
    // Add created travel auth to session user's travelAuths field
    const session = await getSession({req})
    console.log(req.body)
    try {
        const president = await User.findOne({level: 3})
        const user = await User.findOne({email: session.user.email}).populate('managers')
        let approvalFields
        if (req.body.international == true && session.user.level == 1) {
            console.log("hellll nawwwww")
            approvalFields = {
                approveBy: [user.managers[0], president],
                managerSig: {
                    user: user.managers[0],
                    signature: '',
                    date: null
                },
                presidentSig: {
                    user: president,
                    signature: '',
                    date: null
                }
            }
        } else {
            console.log('helll yeaaaaa')
            approvalFields = {
                approveBy: [user.managers[0]],
                managerSig: {
                    user: user.managers[0],
                    signature: '',
                    date: null
                },
                presidentSig: null
            }
        }
        console.log({
            ...req.body,
            ...approvalFields
        })
        const newTravelAuth = new TravelAuth({
            ...req.body,
            ...approvalFields
        })
        await newTravelAuth.save()
        await User.updateOne({email: session.user.email},{$push: {travelAuths: newTravelAuth}})
        try {
            if (req.body.international == true && session.user.level == 1) {
                await transporter.sendMail({
                    ...mailOptions, 
                    to: president.email,
                    subject: "New Travel Authorization",
                    text: "This is a test btw",
                    html: `<h1>New Travel Authorization</h1><p>${user.firstName + " " + user.lastName} has requested a new travel authorization.</p>`
                })
            }
            await transporter.sendMail({
                ...mailOptions, 
                to: user.managers[0].email,
                subject: "New Travel Authorization",
                text: "This is a test btw",
                html: `<h1>New Travel Authorization</h1><p>${user.firstName + " " + user.lastName} has requested a new travel authorization.</p>`
            })
            res.json({msg: "Success!"})
        } catch (err) {
            console.log(err)
        }
        res.json({msg: 'Success!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}