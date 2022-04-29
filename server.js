const express = require("express");
const apiRouter = require("./routes/api")

const app = express();
const port = 3000;
//start using apiRouter
app.use('/api', apiRouter);

app.get('/api', (req,res) => {
    res.send("[]");
});

// server started
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}/`);
});