var express=require("express")
var app=express();
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'))
const product=require("./routes/products")
app.use("/product",product)



app.listen(9000,(()=>{
    console.log("server running http://localhost:9000/")
}))