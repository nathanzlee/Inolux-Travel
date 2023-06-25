import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import connectDB from '../../../util/connectDB'
import User from '../../../models/user'
import bcrypt from 'bcrypt'

connectDB()

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 60 * 60
  },
  providers: [
    Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({email})
        if (user) return loginUser({password, user})

        throw new Error("No such email.");
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
  },
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
  callbacks: {
    session: async (session, user) => {
        const person = await User.findOne({email: session.session.user.email})
        session.user = person
        return Promise.resolve(session)
    }
  }
})


const loginUser = async ({password, user}) => {
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch){
    // throw new Error("Password Incorrect.");
    const hashPass = await bcrypt.hash(password, 12)
    User.findOneAndUpdate(
      {email: user.email},
      {$set: {password: hashPass}},
      (err) => {
        if (err) throw new Error("Something wrong")
      }
    )
  }

  return user;
}

const registerUser = async ({email, password}) => {
  const hashPass = await bcrypt.hash(password, 12)
  const newUser = new User({ email, password: hashPass })
  await newUser.save()
  throw new Error("Success! Check your email.");
}