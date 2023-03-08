var express=require("express")
var app=express()

var router=express.Router();
var mysql=require("mysql");
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"shopitem_db"
})
db.connect((err)=>{
  if(err) throw err;
  console.log("connted")
})


router.get("/",(req,res)=>{
    res.render("productreg",{'msg':"Register Here!"})
})
router.get("/pview",(req,res)=>{
    var ftc="select * from product";
    db.query(ftc,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.render("productview",{'data':result})
        }
    })
})
router.post("/",(req,res)=>{
    var pname,category,price,stock;
    pname=req.body.pname;
    category=req.body.cat;
    price=req.body.price;
    stock=req.body.stock;
    var sql="insert into product values(?,?,?,?,?)"
    db.query(sql,[0,pname,category,price,stock],(err,result)=>{
        if(err) throw err;
        res.send("Data Registered Successfully")

    })
})
router.get("/delt/:id",(req,res)=>{
    var idno=req.params.id;
    var dsql="delete from product where prd_id=?"
    db.query(dsql,idno,(err,result)=>{
        if(err) throw err;
        res.redirect("/product/pview")
    })
 
    
})

module.exports=router