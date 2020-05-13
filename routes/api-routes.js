var db = require("../models");


module.exports = function(app) {

    app.post("/api/saveBurger", function(req, res) {
    
        db.burger.create({
          burger_name: req.body.burger_name,
          burger_status: req.body.burger_status,

        })
          .then(function(dbsaveBurger) {
            res.json(dbsaveBurger);
          });
      });


      app.get("/api/getUndevoured", function(req, res) {
        db.burger.findAll({
          where: {
            burger_status: "ready"
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
      app.get("/api/getDevoured", function(req, res) {
        db.burger.findAll({
          where: {
            burger_status: "devoured"
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });





      app.put("/api/devourBurger/:id", function(req, res) {

        
        db.burger.update(
            { burger_status: 'devoured' },
            { where: { id: req.params.id } }
          )
          .then(function(burger) {
            res.json(burger);
          });
      });



    };