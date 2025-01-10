const express= require("express");
const cors = require("cors");
const app = express();
const options={
    origin:(origin,callback)=>{
        callback(null,true)
    }
}
app.use(cors(options));
app.use(express.json());
const data=["hello",123,{"key":"value"}];
const studentData=[
    {
    name:"Sudhan",
    age:19,
    rollnumber:233039
    },
];
app.post('/',(req,res)=>{
    studentData.push(req.body);
    console.log(req.body);
    res.send("Done")
})
app.get('/student',(req,res)=>{
    res.send(studentData);
})
app.listen(3333,()=>{
    console.log("started hhg")
})    