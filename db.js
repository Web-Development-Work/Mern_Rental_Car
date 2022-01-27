const mongoose = require("mongoose");

function connectDB()
{
    mongoose.connect("mongodb+srv://Anil0791:Paliabhi@car-rental.oa3ck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    const connection= mongoose.connection

    connection.on('connected', ()=>{
        console.log("MongoDB Connection Successfull");
    })

    connection.on('error', ()=>{
        console.log("MongoDB Connection Error");
    })
}

connectDB();

module.exports= mongoose;