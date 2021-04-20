const mongoose=require("mongoose");
const db = process.env.DATABASE;
mongoose.connect( db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful...");
}).catch((err)=>{
    console.log(err);
})