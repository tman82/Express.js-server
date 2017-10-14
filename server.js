const express = require('express')
const path = require('path')
const pug = require('pug')
const app = express()


// View engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Route to the home page
app.get('/', (req, res) => {
  res.render('index')
})

// Route to index.pug
app.get('/views/index.pug', (req, res) => {
  res.render('index')
})


app.listen(8080, (req, res) => {
  console.log('Listening on port 8080...')
})
