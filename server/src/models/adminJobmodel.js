
const mongoose = require('mongoose')
const FormSchema = new mongoose.Schema({

    company_name:{type:String},

    position:{type:String},

    contract:{type:String},
    
    location:{type:String}
},{
    timestamps:true
})

const FormModel = mongoose.model("jobs",FormSchema)
module.exports =FormModel