const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000;
const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/wineBuddy');
        console.log('connection open')
    } catch (error) {
        console.log('connection failed: ', error)
    }
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/dog', (req, res) => {
    res.send('woof!')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

