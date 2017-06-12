var Main = require('../api/main.js');
var path = require('path');

function get(res){
  Message.find(function(err, message){
      if(err){
        res.send(err);
      }
      res.json(message);
  });
};

options = {
    secure: true, // Make the request secure
    num: 99,      // Get 10 integers
    min: 0,     // Minimum of -10
    max: 255,      // Maximum of 10
    col: 3,       // 2 columns
    base: 10,     // Use Base 16
    rnd: "id.123" // Which set of random numbers to use
}

function randomCallback(integers){
    // Prints row 1, column 4
    console.log(integers);
    // console.log(integers);
}

Main.generateIntegers(randomCallback, options);

module.exports = function(app){





// ---------------------------send html file

  app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/../../app/view/index.html'));
  });

};
