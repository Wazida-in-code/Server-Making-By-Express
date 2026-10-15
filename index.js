import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello Express.js!')
})

app.get('/about', (req, res) => {
    res.send('Do You Know About Me?')
})


app.get('/profile', (req, res) => {
    res.send('Have a look in my profile page...')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})