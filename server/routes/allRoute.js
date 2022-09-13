const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const allController = require('../controller/allController');
const sessions = require('express-session');

router.get('/', allController.homepages);
router.get('/student', allController.addClass1);
router.post('/ad1', allController.addingData);
router.get('/mark/:id', allController.checkData);
router.get('/updatemark/:id', allController.updateMark);

router.get('/logout', allController.logOut);

router.get('/dstudent/:id', allController.deleteData);

router.post('/markupdate', allController.editMarks);

router.get('/dashboard', allController.dashBoard);

router.get('/login', allController.login);

router.post('/users', allController.authAdmin);

module.exports = router;
