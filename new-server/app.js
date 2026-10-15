import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('New Server is Starts...')
})


const usersData = [
    {id: 1, name: "Oyshi", dept: "English"},
    {id: 2, name: "Tanha", dept: "Arts"},
    {id: 3, name: "Ramisha", dept: "Business Studis"},
    {id: 4, name: "Omor", dept: "CSE"},
]



app.get('/users', (req, res) => {
    res.send(usersData)
})

app.listen(PORT, () => {
    console.log(`Pls, listen to the ${PORT} no. port`);
})