
/*
 * GET home page.
 */

let cars = require('../cars.json');

//console.log(cars);

exports.view = function(req, res){
  res.render("index", cars);
};

