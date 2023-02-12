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
router.get('/updatemarkii/:id', allController.termiiPage);

router.get('/logout', allController.logOut);

router.get('/dstudent/:id', allController.deleteData);




router.post('/markupdate', allController.editMarks);
router.post('/markupdate_ii', allController.editMarks2);


router.get('/dashboard', allController.dashBoard);

router.get('/login', allController.login);

router.post('/users', allController.authAdmin);

router.get('/pdf/iv/:id', allController.print4);

router.get('/pdf/kgii/:id', allController.printKg2);

router.get('/pdf/nursery/:id', allController.pnurse);

router.get('/pdf/x/:id', allController.printX);


module.exports = router;
