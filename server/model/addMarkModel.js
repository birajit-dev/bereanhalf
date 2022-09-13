const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

// const event = new Date();

// const options = {  year: 'numeric', month: 'short', day: 'numeric' };

// const newDate = event.toLocaleDateString('en-US', options);




const markData = new mongoose.Schema({
    name: String,
    fname: String,
    rollnumber: Number,
    address: String,
    classB: String,
    english:{pt1: {
        type:String,
    },
    nb1: {
        type:String,
    },
    se1: {
        type:String,
    },
    theory: {
        type:String,
    }},
    math:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    hindi:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    bengali:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    computer:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    moralScience:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    generalKnowledge:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    science:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    socialScience:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    socialStudy:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    informationTechnology:{
        pt1: {
            type:String,
        },
        nb1: {
            type:String,
        },
        se1: {
            type:String,
        },
        theory: {
            type:String,
        }
    },
    rhymes: Number,
    dictation: Number,
    conversation: Number,
    cursive: Number,
    workEducation: String,
    artEducation: String,
    physicalEducation: String,
    discipline: String,
    sports: String,
    workingDays: String,
    presentDays: String,
    inClass: String,
    remarks: String,
    //add_dates: String

});

markData.plugin(AutoIncrement, {id:'news_seq',inc_field: 'news_id'});
module.exports = mongoose.model('Marksheet', markData);