const express = require("express");
const cors = require("cors");
const path = require("path");
const dbConnection = require("./db");
require("dotenv").config();
const userRoute = require("./routes/usersRoute");
const carRoute = require("./routes/carsRoute");
const bookingRoute = require("./routes/bookingsRoute");

const app= express();


// middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users/",userRoute);
app.use("/api/cars/",carRoute);
app.use("/api/bookings/",bookingRoute);



if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}


app.get("/",(req,res)=>{
    res.send("Server working");
})




const port = process.env.PORT || 5000;
app.listen(port ,()=>{
    console.log(`Server running on port ${port}`);
})
