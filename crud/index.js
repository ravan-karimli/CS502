const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


let users = [
    {
        id:1,
        username:'Ravan',
        email: 'ravan@gmail.com'
    },

    {
        id:2,
        username:'Ali',
        email: 'ali@gmail.com'
    },

    {
        id:3,
        username:'Jafar',
        email: 'jafar@gmail.com'
    },
]

//GET
app.get('/users',(req,res) => {
    return res.json(users)
})

//GET BY ID
app.get('/users/:id',(req,res) => {
    const {id} = req.params
    const user = users.find(u => u.id == id)
    if (user) {
        return res.status(200).json(user)
    }else {
        return res.status(404).json('There is no user in this id!')
    }
})

//Delete
app.delete("/users/:id",(req,res) => {
    const { id } = req.params
    users = users.filter((users) => users.id != id )
    return res.json('User deleted!')
})

//POST
app.post('/users',(req,res) => {
    const {username,email} =req.body
    const newUser = {
        id: 4,
        username,
        email
    }
    users.push(newUser)
    return res.json('user added succesfully')
})

//PATCH
app.patch('/users/:id', (req,res) => {
    const { id } = req.params
    const { username,email } = req.body
    const user = users.find((u) => u.id == id)
    if (user) {
        user.username = username
        user.email = email
        return res.json('User has been updated')
    } else {
        return res.json("'There is no user with this id!'")
    }
})



const PORT = 8000
app.listen(PORT, console.log(`Server running on port: http;//localhost:${PORT}`))

