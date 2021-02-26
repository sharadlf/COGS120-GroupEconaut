exports.view = function(req, res){
    res.render("comparison", {
        "BMW":[
            {
              "image":"BMW Card.svg",
              'identifier': '328i',
              "hiddenimage": "https://m.media-amazon.com/images/I/71GN-crluuL._UY560_.jpg"
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
