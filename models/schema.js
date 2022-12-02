const mongoose = require('mongoose')

const inv = new mongoose.Schema({

    name:{
        type: String, 
    },
    scientific_name:{
        type: String, 
    },
    img:{
        type: String,
    },
    class:{
        type: String,
    },
    family:{
        type: String,
    }

})

const Trees = mongoose.model('Trees', inv);
module.exports = Trees;