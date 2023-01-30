const express = require('express');

const app = express()

app.get("/api", ( req, res ) => {
    res.json({ "users" : [1,2,3,4,5,6,7,8,9] })
})

app.listen(5000,() => console.log("this is work on path 5000!!!"));