let carlist = require('../carlist.json');


exports.addCar = function(request, response) {   
	// Your code goes here

	var newCar = {
		"brand": request.query.brand,
		"model": request.query.model,
		"image": "https://www.fillmurray.com/640/360"
	}
	
    //console.log(newCar);
    console.log(carlist);

    carlist.cars.push(newCar);

    console.log("DIVIDER!!!!!")
    console.log(carlist);



	response.render('index',carlist); 
	
//	carlist.cars.push(newCar);

}