import connectDB from '../../../util/connectDB'
import User from '../../../models/user'
import bcrypt from 'bcrypt'

connectDB()

export default async function handler(req, res){
    if (req.method == 'POST') {
        await createUser(req, res)
    } else {
        await getUsers(req, res)
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json({data: users})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}

const createUser = async (req, res) => {
    try {
        // Find manager from firstName given by req.body.manager
        // Create new user with given info 
        // Add manager and president to respective fields
    } catch (err) {

    }
}