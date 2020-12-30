const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

// app.get('/help', (req, res) => {
//   res.send([
//     {
//       name: 'andrew',
//       age: 27,
//     },
//     {
//       name: 'sarah',
//     },
//   ])
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About page</h1>')
// })

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
