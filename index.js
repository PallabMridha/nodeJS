const express = require('express')
const userSchema = require('./model/userSchema')
const app = express()
const port = 3000
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const nodemailer = require('./helpers/emailconfig');
const testmiddleware = require('./middleware/testmiddlewere');

app.use (express.json())

// Database connection
 
mongoose.connect('mongodb+srv://pollob:pollob@nodejs.xlxw4sy.mongodb.net/usseger?appName=nodeJS')
  .then(() => console.log('Connected!'));
// Database connection

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user', (req, res) => {
  res.send("data gese")  
  const {name, email, password, newuser} =req.body
  var token = jwt.sign({ id: email }, 'pollob');
  bcrypt.hash(password, 10, function(err, hash) {
    const users = userSchema({
    name: name,
    email: email,
    password: hash,
    token: token
  })
  users.save()
  nodemailer(email)
});
 
})

// ***************
app.get('/user', testmiddleware, async(req, res) => {
  const users = await userSchema.find({})
  res.send(users)
   res.send('done')
})
// ***************

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

