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
        // Add manager to respective field
        const manager = await User.findOne({firstName: req.body.manager})
        const hashPass = await bcrypt.hash(req.body.password, 12)
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPass,
            level: req.body.level,
            managers: [manager],
            department: req.body.department,
        })
        await newUser.save()
        res.json({msg: 'User created successfully!'})
    } catch (err) {
        console.log(err)
        res.json({err: err})
    }
}