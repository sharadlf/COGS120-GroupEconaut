
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
    "BMW":[
      {
        "brand":"BMW",
        "model":"328i",
        "year":"2013",
        "description":"The 2021 BMW 3-series epitomizes the modern sports sedan with its comprehensive performance and innate sophistication. The German brand offers two phenomenal engines for this model—a 255-hp four-cylinder and a 385-hp straight-six—both of which are as quick as they are refined. There's also a plug-in hybrid for the green crowd. While we're saddened by BMW's decision to eliminate the manual transmission, the perceptive eight-speed automatic is a worthy substitute. What's more, the 3's fantastic chassis can seamlessly shift from calm to frisky at a moment's notice. Unfortunately, its steering—although improved over the previous generation's—still lacks the tactility that enthusiasts once idolized. The 2021 3-series fulfills its mission as an entry-level premium sedan with ample cabin and trunk space as well as copious amounts of luxury and technology.",
        "classification":"Phase 1 Low Emission Vehicle",
        "MPG":"22 City, 34 Hwy",
        "emission":"3.14",
        "fuelcap":"15.8 to 16.1",
        "score":"43",
        "image":"2013-bmw-328i.png"
      }
    ],
    "Toyota":[
      {
        "brand":"Toyota",
        "model":"prius",
        "year":"2021",
        "description":"empty",
        "classification":"empty",
        "MPG":"58 City, 53 Hwy",
        "emission":"2.37",
        "fuelcap":"10.6 to 11.3",
        "score":"66",
        "image":"2021.toyota.prius.png"
      },

      {
        "brand":"Toyota",
        "model":"Camry",
        "year":"2018",
        "image":"2018.toyota.camry.png"
      }
    ],

    "Honda":[
      {
          "brand":"Honda",
          "model":"Civic",
          "year":"2016",
          "image":"2016.honda.civic.png"
      }
    ],

    "Jeep":[
      {
          "brand":"Jeep",
          "model":"Wrangler",
          "year":"2015",
          "image":"2015.jeep.wrangler.png"
      }
    ],

    "Tesla":[
      {
          "brand":"Tesla",
          "model":"Model S",
          "year":"2019",
          "image":"2019.tesla.model.s.png"
      }
    ]
    
  });
};

