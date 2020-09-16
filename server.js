const express = require('express')

const app = express()

app.use(express.static('docs/.vitepress/dist'))

app.listen(3000, () => {
  console.log('start')
})
