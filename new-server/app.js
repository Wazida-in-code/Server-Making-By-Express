import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('New Server is Starts...')
})

app.use(cors());
app.use(express.json())

const usersData = [
    {id: 1, name: "Oyshi", dept: "English"},
    {id: 2, name: "Tanha", dept: "Arts"},
    {id: 3, name: "Ramisha", dept: "Business Studis"},
    {id: 4, name: "Omor", dept: "CSE"},
]


app.get('/users', (req, res) => {
    res.send(usersData)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = usersData.length + 1;
    usersData.push(newUser)
    res.send({success: true, message: 'User added successfully!'})
})

app.listen(PORT, () => {
    console.log(`Pls, listen to the ${PORT} no. port`);
})