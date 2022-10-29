const express = require("express");
const cors = require('cors');
const { json } = require("express");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3001"
} 

const requestEndpoint = "https://api.imgflip.com/get_memes"


app.get("/api", (req,res) => {
    res.json({message: "Hello from server!"});
})

app.get("/photos", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const response = await fetch(requestEndpoint,fetchOptions);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    res.json(jsonResponse);
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
})
