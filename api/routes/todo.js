var express = require('express');
var router = express.Router();
var Task = require('../models/Tasks');

/* Router is mounted at https://localhost:3000/todo. */

router.get('/:id?',function(req,res,next){

  if(req.params.id){

    Task.getTaskById(req.params.id,function(err,rows){

      if(err)
      {
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  }
  else{

    Task.getAllTasks(function(err,rows){

      if(err)
      {
        res.json(err);
      }
      else
      {
        res.json(rows);
      }

    });
  }
});

router.post('/',function(req,res,next){

  Task.addTask(req.body, function(err,count){

    if(err)
    {
      res.json(err);
    }
    else{
      res.json(req.body);//or return count for 1 & 0
    }
  });
});
router.post('/:id',function(req,res,next){
  Task.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/:id',function(req,res,next){

  Task.deleteTask(req.params.id,function(err,count){

    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }

  });
});
router.put('/:id',function(req,res,next){

  Task.updateTask(req.params.id,req.body,function(err,rows){

    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(rows);
    }
  });
});


// router.get('/', function(req, res, next) {
//
//   Task.getAllTasks(function (err, rows)
//   {
//     err && res.json(err);
//     rows && res.json(rows);
//   });
//
//   //res.render('index', { title: 'todo' });
// });

module.exports = router;
