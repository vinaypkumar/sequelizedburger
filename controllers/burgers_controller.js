var express=require('express');
var Burger=require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res){
  res.redirect('/burgers')
});

router.get("/burgers", function(req, res) {

    Burger.findAll({}).then(function(data) {
      var obj = {
        burgers: data
      };
      res.render("index", obj);
    });

});

 router.post("/burgers/create", function(req, res) {

    Burger.create({
      burger_name: req.body.burger_name,
      devoured: false      
    }).then(function(){
      res.redirect('/burgers');
    });

  });

router.put("/burgers/update/:id", function(req, res) {
    Burger.update({'devoured': true}, { where: { id: req.params.id}}).then(function(data) {
      res.redirect("/burgers");
    });
  });

module.exports = router;
