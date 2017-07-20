var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
    rangeName: String,
    img : {data: Buffer,contentType: String},
});

Carsmodel = mongoose.model('Carsmodel',CarSchema);

module.exports = Carsmodel;