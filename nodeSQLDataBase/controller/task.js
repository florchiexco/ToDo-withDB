const db = require("../config/config_mysql");
const tableName= "tasks";

/* Consultas a la base de datos por medio de GET */

//Por defecto, ver todas las filas
const viewAll = (req, res) => {
  db.query("SELECT * FROM " + tableName + ";", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

//Al pasarle un id a la url obtenemos una sola de nuestras filas
const viewById = (req, res) => {
    let sql= "SELECT * FROM " + tableName + " WHERE id=  ? ;";
    db.query(sql,
    [req.params.id],
    (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

const viewByFilter = (req, res) => {
  let filtros = `isDone = '${req.query.isDone}'`;
  let sql = "SELECT * FROM " + tableName + " WHERE " + filtros + ";";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

/* Consultas a la base de datos por medio de un POST */

//Agregar una nueva fila por medio del body-parser
const addNewData = (req, res) => {
  let sql= "INSERT INTO " + tableName + " (title, description, isDone) VALUES (?, ?, ?)";
  db.query( sql ,
   [req.body.title, req.body.description, req.body.isDone],
    err => {
    if (err) throw err;
    res.json(req.body);
  });
};

/* Consultas para eliminar CUIDADO */

// esta consulta elimina una fila mediante el id que se le pasa por la url
const deleteById = (req, res) => {
  let sql = "DELETE FROM " + tableName + " WHERE id= ? ;";
  db.query(sql, [req.params.id], (error, results) => {
    if (error) return console.error(error.message);
    res.json(results.affectedRows);
  });
};

/* Consultas para actualizar la base de datos */

// esta consulta actualiza valores mediante el body parser del postman
const upgrade = (req, res) => {
  const data = req.body;
  let sql =
    "UPDATE " +tableName+  " SET title = ? , description = ? , isDone = ? WHERE id = ? ;";
    db.query(sql, [req.body.title, req.body.description, req.body.isDone, req.body.id], function(err, result) {
    if (err) throw err;
    res.json(result.affectedRows);
  });
};

  //Devuelve nombre e id de un usuario asignado a cierta tarea en particular

  const getUserAssigned= (req, res) => {
    const data= req.params;
    let sql= "SELECT u.id AS UserID, u.name AS Usuario FROM users AS u INNER JOIN tasksXuser AS txu ON u.id=txu.idUser WHERE txu.idTask=?;"
    db.query(sql, [data.id], function(err, rows){
      if(err) throw err;
      res.json(rows);
    })
   }

   //Se muestran titulo, descripcion y dueño de las tareas que tienen un usuario asignado
   const viewAllAssigned = (req, res) => {
    let sql= "SELECT t.title AS Tarea, t.description AS Descripcion, u.name AS 'Asignada a' FROM tasks AS t INNER JOIN users AS u INNER JOIN tasksXuser AS txu ON t.id=idTask && u.id=txu.idUser;";
    db.query(sql, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
  };

  //Asigna un usuario a una tarea
  const assign = (req, res) => {
    const data = req.params;
    let sql = "INSERT INTO tasksXuser (idTask, idUser) VALUES (?,?);";
    db.query(sql, [data.id, data.userID], function(err, result) {
      if (err) throw err;
      res.json(result.affectedRows);
    });
  };

  //Desasigna a un usuario en particular de cierta tarea
  const unassign= (req, res) => {
    const data= req.params;
    let sql= "UPDATE tasksXuser SET idUser= NULL WHERE idTask=? && idUser=?;";
    db.query(sql, [data.id, data.userID], function(err, result){
      if(err) throw err;
      res.json(result.affectedRows);
    });
  };

module.exports = {
  viewAll,
  viewById,
  viewByFilter,
  addNewData,
  deleteById,
  upgrade,
  getUserAssigned,
  assign,
  viewAllAssigned,
  unassign
};
