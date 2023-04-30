//require needed modules
const express = require('express')

//initialize the app object
const app = express()

//create homepage route
app.get('/', (req,res) => {
  res.send('Hello World')
})

app.get('/second', (req,res) => {
  res.send('My Second Page!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${PORT}`))