const express = require('express')
const collection = require('./mongoose')
const cors = require('cors')
const login = express()

// Middleware
login.use(express.json())
login.use(express.urlencoded({ extended: true }))
login.use(cors())

// Login Route
login.post('/login-data', async (req, res) => {
    const { email, password } = req.body
    try {
        const check = await collection.findOne({ email: email})
        console.log(check)
        if (check) {
            console.log('1')
            if(check.password === password){
                res.json("exist")
                console.log('2')
             }
            else{
                console.log('3')
                res.json("wrong")
            }
        } 
        else {
            console.log('4')
            res.json("notexist")
        }
    } catch (e) {
        console.log('5')
        res.json("notexist")
    }
})

// Signup Route
login.post('/Signup', async (req, res) => {
    const { email, password } = req.body  // Destructure email and password from request body
    const data = {
        email: email,
        password: password
    }
    console.log(data);
    try {
        const check = await collection.findOne({ email: email })
        if (check) {
            res.json("exist")
        } else {
            await collection.insertMany([data])
            res.json("notexist")
        }
    } catch (e) {
        res.json("notexist")
    }
})

// Export login instance
module.exports = login
