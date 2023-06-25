import React, { useState, useEffect, Fragment } from 'react'
import { useSession, getSession } from 'next-auth/react'
import Select from '../../components/select'


const User = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [manager, setManager] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch('/api/test/user')
        .then(req => req.json())
        .then(res => {
            const data = res.data.map(d => {
                return {
                    option: d.firstName
                }
            })
            setUsers(data)
            setLoading(false)
            console.log(res.data)
        })
    }, [])
    
    async function createUser() {
        const newUser = {firstName: firstName, lastName: lastName, email: email, manager: manager}
        console.log(newUser)
        const req = await fetch('/api/test/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const res = await req.json()
        console.log(res)
    }

    return (
        <div className="h-[100vh] w-[100vw]">
            <div className="w-full h-full bg-gray-100 p-10">
                <div className="sm:px-6 lg:px-8">
                    <h1 className="font-semibold leading-6 text-2xl">Users</h1>
                    <div>
                        <input
                            type='text'
                            placeholder='First name'
                            onChange={e => {setFirstName(e.target.value)}}
                        />
                        <input
                            type='text'
                            placeholder='Last name'
                            onChange={e => {setLastName(e.target.value)}}
                        />
                        <input
                            type='text'
                            placeholder='Email'
                            onChange={e => {setEmail(e.target.value)}}
                        />
                        <Select options={users} initial={users.length > 0 ? users[0] : {id: 0, option: ''}} onChange={e => {
                            console.log(e)
                            setManager(e.option)
                        }} styles={'max-w-[120px]'} />
                        <button onClick={createUser}>Create</button>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
  
}
  

export default User
