var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var Car = require('../models/CarModel.js');

/* GET cars listing. */
router.get('/', function(req, res, next) {

  Car.find(function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

router.post('/', function(req, res, next) {

  Car.create(req.body,function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

router.get('/:id', function(req, res, next) {

  Car.findById(req.params.id,function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

router.put('/:id', function(req, res, next) {

  Car.findByIdAndUpdate(req.params.id,req.body,function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});


router.delete('/:id', function(req, res, next) {

  Car.findByIdAndRemove(req.params.id,req.body,function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});


router.delete('/', function(req, res, next) {

  Car.remove(function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

module.exports = router;
