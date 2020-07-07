const mysql=require("mysql");

const mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",


})
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected successfully to mysql db")

    }
    else{
        console.log("Error in connection "+err)
    }
}
)
module.exports=mysqlConnection;