const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Sample Node JS APP')
})
app.listen(process.env.PORT || 3000)
