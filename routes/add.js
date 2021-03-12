let cars = require('../cars.json');
let carlist = require('../carlist.json');



exports.addCar = function(request, response) {   
	// Your code goes here
	var length = carlist.cars.length;
	//console.log("LENGTH IS: " + length);
	var newCar = { 
		"26" : {
			"brand": request.query.brand,
			"model": request.query.model,
			"id": length,
			"image": "https://www.fillmurray.com/640/360"
		}}
	//console.log(carlist.cars.length);
	
    //console.log(newCar);
   // console.log(carlist.cars);

    carlist.cars.push(newCar);

    console.log("DIVIDER!!!!!")
    console.log(carlist.cars);



	response.render('index',cars); 
	
//	carlist.cars.push(newCar);

}