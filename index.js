require('dotenv').config()

const express = require('express')
const cors = require('cors');
const connectDb = require('./db');


const app = express()
const port = 5000

const formRouter = require("./route/form.route");
const cookieParser = require('cookie-parser');


// Connect to MongoDB
connectDb();

const jsonFIle=[
    {
        title:"node",
        amout:"11"
    },
    {
        title:"express",
        amout:"10"
    },
    {
        title:"express",
        amout:"122"
    },
]

app.use(cors({ origin: '*' }));
// app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



app.use("/api/form",formRouter);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res)=>{
    res.send("hello youtube")
})

app.get("/json",(req,res)=>{
    res.json(jsonFIle)
})

app.get("/nodemon",(req,res)=>{
    res.send("nodemon is running")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})