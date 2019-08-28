var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('bio', { bioName: 'Benjamin Sith',
                          age: 26,
                          phoneNumber: '8176571629',
                          email: 'bsithisane@gmail.com'});
});

module.exports = router;
