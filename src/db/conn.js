const mongoose = require("mongoose")
const DB = "mongodb+srv://bharti_145:uiop890@@@cluster0.p1kwf.mongodb.net/form1?retryWrites=true&w=majority"

mongoose .connect(DB,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology :true,
    useFindAndModify : false
}).then(() =>{
    console.log("connected sucessfull")
}).catch((err) =>{
    console.log(err)
})