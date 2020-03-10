const db = require("../config/config_mysql");
const tableName= "tasksXuser";

/* Consultas a la base de datos por medio de GET */

//Ver tareas con su titulo y descripcion con el que la tiene asignada , LAS MUESTRA SOLO SI TIENE A ALGUIEN ASIGNADO
const viewAll = (req, res) => {
    let sql= "SELECT t.title AS Tarea, t.description AS Descripcion, u.name AS 'Asignada a' FROM tasks AS t INNER JOIN users AS u INNER JOIN " +tableName+ " AS txu ON t.id=idTask && u.id=txu.idUser;";
    db.query(sql, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

//Muestra tarea con su titulo y descripcion, mas el que la tiene asignada, por ID de tasksxuser
const viewById = (req, res) => {
  
    let sql = "SELECT t.title as Tarea, t.description as Description, u.name as 'Asignada a' from tasks as t inner join users as u inner join " + tableName + " as txu on t.id=idTask && u.id=txu.idUser WHERE txu.id= ? ;";
    db.query(sql, [req.params.id], (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  };

  //Borra un registro por id de la tabla tasksXuser
  const deleteById = (req, res) => {
    let sql = "DELETE FROM " + tableName + " WHERE id= ?; ";
    db.query(sql, [req.params.id], (error, results) => {
      if (error) return console.error(error.message);
      res.json(results.affectedRows);
    });
  };


  //Devuelve con su titulo, descripcion  las tareas de una persona en especifico
  const getAssigned = (req, res) => {
    let sql= "SELECT t.title AS Tarea, t.description AS Descripcion, u.name AS Autor FROM tasks AS t INNER JOIN users AS u INNER JOIN " + tableName + " AS txu ON t.id=idTask && u.id=txu.idUser WHERE u.id = ? ;";
    db.query(sql, [req.params.userID], function(err, rows){
    if(err) throw err;
    res.json(rows);
  });
};

  const assign = (req, res) => {
    const data = req.params;
    let sql = "INSERT INTO " +tableName +" (idTask, idUser) VALUES (?,?);";
    db.query(sql, [data.taskID, data.userID], function(err, result) {
      if (err) throw err;
      res.json(result.affectedRows);
    });
  };

  //Desasigna a un usuario en particular de cierta tarea
  const unassign= (req, res) => {
    const data= req.params;
    let sql= "UPDATE " +tableName+ " SET idUser= NULL WHERE idTask=? && idUser=?;";
    db.query(sql, [data.taskID, data.userID], function(err, result){
      if(err) throw err;
      res.json(result.affectedRows);
    });
  };

module.exports = {
    viewAll,
    viewById,
    deleteById,
    getAssigned,
    assign,
    unassign
  };