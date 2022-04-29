const express = require("express");
const apiRouter = require("./routes/api")

const app = express();
const POST = process.env.PORT || 5000;
//start using apiRouter
app.use('/api', apiRouter);

app.get('/api', (req,res) => {
    res.send("[]");
});

// Server running on port: http://localhost:5000/
app.listen(POST, () => {
    console.log(`Server running on port: http://localhost:${POST}/`);
});