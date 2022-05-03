const express = require("express");
const apiRouter = require("./routes/api")

const app = express();
const POST = process.env.PORT || 5000;
// cors
const cors = require("cors");
app.use(
    cors({
        origin: "*"
    })
)
// start using apiRouter
app.use('/api', apiRouter);

app.get('/api', (req,res) => {
    res.send("[]");
});

// Server running on port: http://localhost:5000/
app.listen(POST, () => {
    console.log(`Server running on port: http://localhost:${POST}/`);
    console.log(`API: http://localhost:${POST}/api/covid-19`);
});