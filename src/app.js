const express=require("express");
const hbs = require("hbs");
require("./db/conn.js");
const User=require("./models/usermessage.js");
const app=express(); 
const path=require("path");
const port=process.env.PORT || 8000

const staticpath=path.join(__dirname,"../public");
const templatespath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");
//middlewaress
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jqury/dist")));

app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs");
app.set("views",templatespath);
hbs.registerPartials(partialpath);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/gallery",(req,res)=>{
    res.render("gallery");
})
app.get("/services",(req,res)=>{
    res.render("services");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.post("/contact", async(req,res) => {
  try {
//   res.send(req.body);
const userData=new User(req.body);
await userData.save();
res.status(201).render("index");
  }
  catch(error)
  {
      res.status(500).send(error);
  }
})



app.listen(port,()=>{
console.log(`server is running at port no ${port}`);
     
})