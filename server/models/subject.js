const mongoose=require('mongoose')
var Subject=mongoose.model('subject',{

    name: {type: String}
    
})
module.exports={Subject}