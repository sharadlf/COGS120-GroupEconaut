//get Home page


let cars = require('../cars.json');
let carlist = require('../carlist.json');

console.log(carlist.cars[0]);



exports.view = function(req, res){
    var id = 1;
   // console.log(model1);
  // console.log("ID is: " + id);
    res.render("Productpage",  carlist.cars[5]);
   // console.log("ID Rendered: " + id);
   // console.log("model rendered: " + model);
  };


  exports.viewCar = function(req, res) {
    //var model = req.params.model;
    // var testBrand = req.params.name;
    // var year = req.params.year;
    console.log("The selected Car: " + model  );
     res.render("Productpage", {
         "cars": cars,
         "productName": model,
         //"fuelcap": "test successful",
         // "testBrand": testBrand,
         // "year": year,

     });
  }
