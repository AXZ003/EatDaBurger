// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        //sent to burgers_controller file
        cb(res);
      });
    },
    
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(cb) {
      orm.delete("burgers", function(res) {
        cb(res);
      });
    }
  };
  

// // Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;