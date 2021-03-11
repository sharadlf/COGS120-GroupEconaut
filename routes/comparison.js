let cars = require('../cars.json');



exports.view = function(req, res){
    res.render("comparison", cars);
   // console.log(carlist);
}
