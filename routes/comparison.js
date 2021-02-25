exports.view = function(req, res){
    res.render("comparison", {
        "BMW":[
            {
              "image":"BMW Card.svg"
            }
          ],
          "Toyota":[
            {
              "image":"Prius Card.svg"
            },
      
            {
              "image":"Camry Card.svg"
            }
          ],
          
          "Honda":[
            {
                "image":"Civic Card.svg"
            }
          ],
      
          "Jeep":[
            {
                "image":"Jeep Card.svg"
            }
          ],
      
          "Tesla":[
            {
                "image":"Tesla Card.svg"
            }
          ]
          
    });
}