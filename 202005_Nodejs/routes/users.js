var express = require('express');
var router = express.Router();
var userService = require('../service/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is a Start of User API');
});

router.get('/getByAge', (req, res, next) => {
  userService.getByAge(req.query).then(data => res.json(data)).catch(err => next(err));
})

router.get("/getall", (req, res, next) => {
  userService.getAll().then(data => res.json(data)).catch(err => next(err));
})

router.post("/create", (req, res, next) => {
  userService.create(req.body).then(data => res.send(data)).catch(err => next(err));
})

module.exports = router;
