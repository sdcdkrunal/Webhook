const express = require('express');
const app = express();

app.get("/home", (req, res)=> {
    res.send("Hello its working")
})

app.post("/webhook", (req, res) => {
    console.log("Running Fine");
    console.log(req.body);
})
app.listen(2000, () => {
    console.log("Server is running on 2000")
})