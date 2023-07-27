const express = require('express');
const app = express();
const PORT = 9700;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.post('/', function (req, res) {
    const data = req.body;
 
    console.log(data);

    message = {
        int : getRandomInt(0, 999)
    }
 
    res.send(JSON.stringify(message));
});
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
