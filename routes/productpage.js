//get Home page


let otherCars = require('../cars.json');
let carlist = require('../carlist.json');

//var model = req.params.id;
//console.log(carlist.cars[model][model]);
//console.log(model);
//console.log(otherCars.BMW[0])

exports.view = function(req, res){
    //var id = 1;
    var model = req.params.id;
   // console.log(carlist.cars[model][model].image);

 // var model = "BMW";
    res.render("Productpage",  carlist.cars[model][model]);
   // console.log("ID Rendered: " + id);
   // console.log("model rendered: " + model);
  };


  exports.viewCar = function(req, res) {
    //var model = req.params.model;
    // var testBrand = req.params.name;
    // var year = req.params.year;
   // console.log("The selected Car: " + model  );
     res.render("Productpage", {
         "cars": cars,
         "productName": model,
         //"fuelcap": "test successful",
         // "testBrand": testBrand,
         // "year": year,

     });
  }
