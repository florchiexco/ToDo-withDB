const db = require("../config/config_mysql");
const tableName= "tasksXuser";

/* Consultas a la base de datos por medio de GET */

//Por defecto, ver todas las filas
const viewAll = (req, res) => {
    let sql= "select t.title as Tarea, t.description as Descripcion, u.name as Autor from tasks as t inner join users as u inner join " +tableName+ " as txu on t.id=idTask && u.id=txu.idUser;";
    db.query(sql, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

const viewById = (req, res) => {
    let sql = "SELECT t.title as Tarea, t.description as Description, u.name as Autor from tasks as t inner join users as u inner join " + tableName + " as txu on t.id=idTask && u.id=txu.idUser WHERE txu.id=" + req.params.id + ";";
    db.query(sql, (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  };

  const addNewData = (req, res) => {
    const data = req.body;
    let sql =
      "INSERT INTO " + tableName + " (idTask, idUser) VALUES ('" +
      data.idTask +
      "', '" +
      data.idUser +
      "')";
  
    db.query(sql, err => {
      if (err) throw err;
      res.json(data);
    });
  };

  const deleteById = (req, res) => {
    let sql = "DELETE FROM " + tableName + " WHERE id=" + req.params.id + ";";
  
    db.query(sql, (error, results) => {
      if (error) return console.error(error.message);
      res.json(results.affectedRows);
    });
  };

module.exports = {
    viewAll,
    viewById,
    addNewData,
    deleteById
  };