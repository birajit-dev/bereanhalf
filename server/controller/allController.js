const { request } = require('express');
var express = require('express');
require('../model/database');


const addStudent = require('../model/addMarkModel');

// const bcrypt = require('bcryptjs');
const session = require('express-session');
// const multer = require('multer');
// const { resolve } = require('path');
// const { rejects } = require('assert');
// const { all } = require('express/lib/application');
// const multerS3 = require('multer-s3');
// const aws = require('aws-sdk');
// var rss = require('rss');





exports.homepages = async(req, res) =>{
    res.render('index');
    //res.redirect('/dashboard');
}

exports.addingData = async(req, res) =>{
    const mData = req.body;
    let user = new addStudent({
        name: mData.name,
        fname: mData.fname,
        rollnumber: mData.rollnumber,
        classB: mData.classB,
        address: mData.address,
        english:mData.english,
        math:mData.math,
        hindi:mData.hindi,
        computer:mData.computer,
        moralScience:mData.moralScience,
        generalKnowledge:mData.generalKnowledge,
        science:mData.science,
        socialScience:mData.socialScience,
        socialStudy:mData.socialStudy,
        informationTechnology:mData.informationTechnology,
        rhymes:mData.rhymes,
        dictation:mData.dictation,
        conversation:mData.conversation,
        cursive:mData.cursive,
        workEducation:mData.workEducation,
        artEducation:mData.artEducation,
        physicalEducation:mData.physicalEducation,
        discipline:mData.discipline,
        sports:mData.sports,
        workingDays:mData.workingDays,
        presentDays:mData.presentDays,
        inClass:mData.inClass,
        remarks:mData.remarks,

    });
    await user.save();
    res.redirect('/dashboard');
}

exports.checkData = async(req, res) =>{
        try{
            let nUrl = req.params.id;
            const newsUrl = await addStudent.findOne({news_id:nUrl});
            res.render('open',{newsUrl});
        }
        catch{
            res.status(500).send({message: error.message || "Error in Homepage"});
        }
    }

 exports.updateMark = async(req, res) =>{
    try{
        let id =req.params.id;
        const stId = await addStudent.findOne({news_id:id})
        res.render('addmarks',{stId})
    }
    catch{
        console.log('Somthing went wrong on Update Marks.')
    }
 }
 
 exports.editMarks = async(req, res) =>{
    const mData = req.body;
    const {id} = req.body;

    addStudent.findByIdAndUpdate(id, 
                {
                    name: mData.name,
                    fname: mData.fname,
                    rollnumber: mData.rollnumber,
                    classB: mData.classB,
                    address: mData.address,
                    english:mData.english,
                    math:mData.math,
                    hindi:mData.hindi,
                    bengali:mData.bengali,
                    computer:mData.computer,
                    moralScience:mData.moralScience,
                    generalKnowledge:mData.generalKnowledge,
                    science:mData.science,
                    socialScience:mData.socialScience,
                    socialStudy:mData.socialStudy,
                    informationTechnology:mData.informationTechnology,
                    rhymes:mData.rhymes,
                    dictation:mData.dictation,
                    conversation:mData.conversation,
                    cursive:mData.cursive,
                    workEducation:mData.workEducation,
                    artEducation:mData.artEducation,
                    physicalEducation:mData.physicalEducation,
                    discipline:mData.discipline,
                    sports:mData.sports,
                    workingDays:mData.workingDays,
                    presentDays:mData.presentDays,
                    inClass:mData.inClass,
                    remarks:mData.remarks,
                }, function(err, data) {
        if(err){
            res.send('Something Went Wrong');
        }
        else{
            res.redirect('/dashboard');
        }
        });
}





//Session Handling

exports.authAdmin = async(req, res) => {
    const { password } = req.body;
    var pNursery = "nursery";
    var pKg2 = "admin@kg2";
    var pKg1 = "admin@kg1"
    var p1 = "admin@1"
    var p2 = "admin@2"
    var p3 = "admin@3"
    var p4 = "admin@4"
    var p5 = "admin@5"
    var p6 = "admin@6"
    var p7a = "admin@7a"
    var p7b = "admin@7b"
    var p8 = "admin@8"
    var p9 = "admin@9"
    var p10a = "admin@10a"
    var p10b = "admin@10b"
    if(password == pNursery){
        var sex = req.session;
        sex.userid = "Nursery";
        res.redirect('/dashboard')
    }else if(password == pKg1){
        var sex = req.session;
        sex.userid = "KG-I";
        res.redirect('/dashboard')
    }else if(password == pKg2){
        var sex = req.session;
        sex.userid = "KG-II";
        res.redirect('/dashboard')
    }else if(password == p1){
        var sex = req.session;
        sex.userid = "I";
        res.redirect('/dashboard')
    }else if(password == p2){
        var sex = req.session;
        sex.userid = "II";
        res.redirect('/dashboard')
    }else if(password == p3){
        var sex = req.session;
        sex.userid = "III";
        res.redirect('/dashboard')
    }else if(password == p4){
        var sex = req.session;
        sex.userid = "IV";
        res.redirect('/dashboard')
    }else if(password == p5){
        var sex = req.session;
        sex.userid = "V";
        res.redirect('/dashboard')
    }else if(password == p6){
        var sex = req.session;
        sex.userid = "VI";
        res.redirect('/dashboard')
    }else if(password == p7a){
        var sex = req.session;
        sex.userid = "VII-A";
        res.redirect('/dashboard')
    }else if(password == p7b){
        var sex = req.session;
        sex.userid = "VII-B";
        res.redirect('/dashboard')
    }
    else if(password == p8){
        var sex = req.session;
        sex.userid = "VIII";
        res.redirect('/dashboard')
    }else if(password == p9){
        var sex = req.session;
        sex.userid = "IX";
        res.redirect('/dashboard')
    }else if(password == p10a){
        var sex = req.session;
        sex.userid = "X-A";
        res.redirect('/dashboard')
    }else if(password == p10b){
        var sex = req.session;
        sex.userid = "X-B";
        res.redirect('/dashboard')
    }
    else{
        res.send('Something Went Wrong');
    }
}

//Session Checker Page Demo//
exports.dashBoard = async(req, res) =>{
    sex=req.session;
    var sexData = sex.userid;
    if(!sex.userid){
        res.redirect('/login');
    }
    else{
        const studentList = await addStudent.find({classB:sexData});
        res.render('dashboard',{sexData, studentList});
    }
}

exports.login = async(req, res)=>{
    res.render('login')
}

exports.addClass1 = async(req, res) =>{
    sex=req.session;
    var sexData = sex.userid;
    if(!sex.userid){
        res.redirect('/login');
    }
    else{
        res.render('addstudent',{sexData});
    }
}

exports.deleteData = async(req, res) =>{
    try{
        let id =req.params.id;
        addStudent.findOneAndDelete({_id: id}, function(err) {
            if (err)
                res.send('Error on Delete');
            else
                res.redirect('/dashboard')        
            });
    }
    catch{
        console.log('Somthing went wrong on Update Marks.')
    }
}

exports.logOut = async(req, res) =>{
    if(req.session) {
        req.session.destroy(err => {
          if (err) {
            res.status(400).send('Unable to log out')
          } else {
            res.redirect('/login')
          }
        });
    } else {
        res.end()
    }
}

exports.print4 = async(req, res) =>{
    try{
        let nUrl = req.params.id;
        const data = await addStudent.findOne({news_id:nUrl});
        res.render('print/IV-V',{data});
    }
    catch{
        res.status(500).send({message: error.message || "Error in Homepage"});
    }   
}


exports.printKg2 = async(req, res) =>{
    try{
        let nUrl = req.params.id;
        const data = await addStudent.findOne({news_id:nUrl});
        res.render('print/kgii',{data});
    }
    catch{
        res.status(500).send({message: error.message || "Error in Homepage"});
    }   
}

exports.pnurse = async(req, res) =>{
    try{
        let ix = req.params.id;
        const data = await addStudent.findOne({news_id:ix});
        res.render('print/kgi',{data});
    }
    catch{
        res.status(500).send({message: error.message || "Error in Homepage"});
    }  
}

exports.printX = async(req, res) =>{
    try{
        let xId = req.params.id;
        const data = await addStudent.findOne({news_id:xId});
        res.render('print/x',{data});
    }
    catch{
        res.status(500).send({message: error.message || "Error in Homepage"});
    }  
}