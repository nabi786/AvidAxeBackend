require("dotenv").config()
const express = require("express")
const app = express()
const PORT= 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// importing routes 
app.use('/api/', require("./routes/compaign"))


app.get("/", (req,res)=>{
    res.status(200).json({success : true, msg : "modernize backend working"})
})


// porst is lietening on this
app.listen(PORT, ()=>{
    console.log(`backend is running on this port ${PORT}`)
})

