var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var Cars = require('../models/Cars.js');

/* GET cars listing. */
router.get('/', function(req, res, next) {

  Cars.find(function(err,car){
    if(err)
    {
      return next(err);
    }
    res.json(car);
  })
});

router.get('/:name', function(req, res, next) {

var name = req.body.name;

  Cars.find({name:req.params.name},function(err,car){
    if(err)
    {
      return next(err);
    }
    res.json(car);
  })
});

router.post('/', function(req, res, next) {

  Cars.create(req.body,function(err,car){
    if(err)
    {
      return next(err);
    }
    res.json(car);
  })
});

router.delete('/:name', function(req, res, next) {

  var name = req.body.name;

  Cars.findOneAndRemove({name:req.params.name},req.body,function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

router.delete('/', function(req, res, next) {

  Cars.remove(function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

router.put('/:name', function(req, res, next) {

  var name = req.body.name;
  //var rangeNum = req.body.rangeNum;

  Cars.findOneAndUpdate({name:req.params.name},{$push:{'range':{rangeNum: req.body.rangeNum}}},req.body,function(err,cars){
    if(err)
    {
      return next(err);
    }
    res.json(cars);
  })
});

module.exports = router;
