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
    mname: String,
    adno: String,
    english:{
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
    },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
        
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
        
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
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
        },
        pt2: {
            type:String,
        },
        nb2: {
            type:String,
        },
        se2: {
            type:String,
        },
        theory2: {
            type:String,
        },
    },
    rhymes: Number,
    rhymes2: Number,
    dictation: Number,
    dictation2: Number,
    conversation: Number,
    conversation2: Number,
    cursive: Number,
    cursive2:Number,
    workEducation: String,
    workEducation2: String,
    artEducation: String,
    artEducation2: String,
    physicalEducation: String,
    physicalEducation2: String,
    discipline: String,
    discipline2: String,
    sports: String,
    sports2: String,
    workingDays: String,
    workingDays2:String,
    presentDays: String,
    presentDays2: String,
    inClass: String,
    inClass2: String,
    remarks: String,
    //add_dates: String

});

markData.plugin(AutoIncrement, {id:'news_seq',inc_field: 'news_id'});
module.exports = mongoose.model('Marksheet', markData);