/* Comment: See figma A3 doc for the card example that I made, I am using the JSON library to just display these cards
using each blocks in comparison.handlebars.
*/
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