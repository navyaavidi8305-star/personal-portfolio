require("dns").setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const projectRoutes = require(
    "./routes/projectRoutes"
);

const contactRoutes = require(
    "./routes/contactRoutes"
);

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
    process.env.MONGO_URI
)

.then(()=>{

    console.log(
        "MongoDB Connected"
    );

})

.catch((error)=>{

    console.log(error);

});

app.use(
    "/api/projects",
    projectRoutes
);

app.use(
    "/api/contact",
    contactRoutes
);

app.get("/",(req,res)=>{

    res.send(
        "Backend running successfully"
    );

});

const PORT = 5000;

app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});