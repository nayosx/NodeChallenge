var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/auth/github', function(req, res, next) {
    res.send('aca se manejara la respuesta de github');
});
  
module.exports = router;