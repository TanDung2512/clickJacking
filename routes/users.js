var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json');
const db = low(adapter);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('payment',{title:"payment"});
});
router.post('/validate', function(req, res, next) {
  db.get('paymentInfo')
    .push({
            owner: req.body.owner,
            cvv  : req.body.cvv,
            cardnumber : req.body.cardnumber,
            expiration_month: req.body.expiration_month,
            expiration_year: req.body.expiration_year,
          })
     .write()
  res.render('successpayment',{title:"payment success"})
});

module.exports = router;
