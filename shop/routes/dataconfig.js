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
module.export=db;
