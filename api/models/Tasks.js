var db = require('../db/connection');

var Task = {

getAllTasks: (callback)=>
{
    return db.query('Select * from task', callback);
},

getTaskById: (id, callback)=>
{
  return db.query('select * from task where Id=?', [id], callback);
},

addTask:(Task,callback)=>
{
    console.log(Task);
  return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
},

deleteTask: (id,callback)=>
{
  return db.query("delete from task where Id=?",[id],callback);
},

updateTask:(id,Task,callback)=>
{
  return db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
}

};


module.exports = Task;