import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('New Server is Starts...')
})

app.listen(PORT, () => {
    console.log(`Pls, listen to the ${PORT} no. port`);
})