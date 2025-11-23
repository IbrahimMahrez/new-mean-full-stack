const { error, log } = require("console");
const fs = require("fs");
/*
const filed = fs.readFile( './hi.json','utf-8',(error,data)=>{
 if(error){
    console.log("error");
 }else{
    console.log(data,"successful");
 }




});

console.log("filered",filed);
*/

//write 
/*
const writfile = fs.writeFile("./file.txt","hi ibra","utf8",(error,data)=>
{
    if(error){
        console.log("errorrrrrrr")

    }else{
        console.log("hi moshden",data);
        
    }
})


const writejson=fs.writeFile("./ko.json",JSON.stringify([{"ibra":"dasd","id":12354}]),"utf8",(error,data)=>{
    if(error){
        console.log("erorrr");
        
    }else{
        console.log("hi bo",data);
        
    }
})*/
//delete fill

/*
const dele=fs.unlink("./hi.json",(err)=>{
    if(err){
        console.log("erorr");
        
    }
})
*/
//sterrrm
/*

const rsterm = fs.createReadStream("./fill.txt", "utf8");
const wsterm = fs.createWriteStream("./new.txt", "utf8");

rsterm.on("data", (chunk) => {
    console.log("chunk:", chunk);
    wsterm.write("hiiiiii");
});

rsterm.on("error", (err) => console.log("Read Error:", err));
wsterm.on("error", (err) => console.log("Write Error:", err));
*/

