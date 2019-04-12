const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/project_db',{useNewUrlParser:true},(err)=>{
    if(!err)
        console.log('MongoDB connection is succeed......');
    else
        console.log('Error in DB connection: ', +JSON.stringify(err));
});

module.exports=mongoose;