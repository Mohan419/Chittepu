//const { truncate } = require('fs');
var mongoose = require('mongoose');
var connection = require('./personaldataconnection');
var schema = mongoose.Schema;
var stuentSchema = new schema({
    
    
    firstname: {
        type : String,
        required :true
    },
    lastname :{
        type : String,
        required : true
    },
    age:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true
    },
    mobile:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true 
    },
    experiance:{
        type : String,
        required : true
    },
    type:{
        type : String,
        required : true
    },
    company:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        reuired:true
    }
    
})
connection.connectToDB();
module.exports = mongoose.model('personal',stuentSchema);