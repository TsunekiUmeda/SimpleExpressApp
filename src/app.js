const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Tsuneki',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Tsuneki',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'About',
    name: 'Tsuneki',
  })
})

app.get('/weather', (req, res) => {
  res.send([
    {
      forecast: 'Cloudy',
      location: 'New York',
    },
  ])
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
