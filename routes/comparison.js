exports.view = function(req, res){
    res.render("comparison", {
        "BMW":[
            {
              "image":"BMW Card.svg",
              'identifier': '328i'
            }
          ],
          "Toyota":[
            {
              "image":"Prius Card.svg",
              'identifier': 'prius'
            },
      
            {
              "image":"Camry Card.svg",
              'identifier': 'camry'
            }
          ],
          
          "Honda":[
            {
                "image":"Civic Card.svg",
                'identifier': 'civic'
            }
          ],
      
          "Jeep":[
            {
                "image":"Jeep Card.svg",
                'identifier': 'wrangler'
            }
          ],
      
          "Tesla":[
            {
                "image":"Tesla Card.svg",
                'identifier': 'model_s'
            }
          ]
          
    });
}