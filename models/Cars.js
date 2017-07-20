var mongoose = require('mongoose');

var CarsSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    img : {type: Buffer},
    range : 
      [
          {
              rangeNum: {type:String}
          }
      ],
   
    updated : {type : Date , default : Date.now},
})

var Car = mongoose.model('Cars',CarsSchema);

module.exports = Car;