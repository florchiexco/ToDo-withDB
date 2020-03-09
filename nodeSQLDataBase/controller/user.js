const db = require("../config/config_mysql");
const tableName= "users";

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
  let sql = "SELECT * FROM " + tableName + " WHERE id=" + req.params.id + ";";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

// const viewByFilter = (req, res) => {
//   console.log(req.query);
//   let filtros = `isDone = '${req.query.isDone}'`;
//   let sql = "SELECT * FROM " + tableName + " WHERE " + filtros + ";";
//   db.query(sql, (err, rows) => {
//     if (err) throw err;
//     res.json(rows);
//   });
// };

/* Consultas a la base de datos por medio de un POST */

//Agregar una nueva fila por medio del body-parser
const addNewData = (req, res) => {
  const data = req.body;
  let sql =
    "INSERT INTO " + tableName + " (mail, pass, name) VALUES ('" +
    data.mail +
    "', '" +
    data.pass +
    "', '" +
    data.name +
    "')";

  db.query(sql, err => {
    if (err) throw err;
    res.json(data);
  });
};

/* Consultas para eliminar CUIDADO */

// esta consulta elimina una fila mediante el id que se le pasa por la url
const deleteById = (req, res) => {
  let sql = "DELETE FROM " + tableName + " WHERE id=" + req.params.id + ";";

  db.query(sql, (error, results) => {
    if (error) return console.error(error.message);
    res.json(results.affectedRows);
  });
};

/* Consultas para actualizar la base de datos */

// esta consulta actualiza valores mediante el body parser del postman
const upgrade = (req, res) => {
  const data = req.body;
  let sql =
    "UPDATE " +tableName+  " SET mail = '" +
    data.mail +
    "', pass = '" +
    data.pass +
    "', name = '" +
    data.name +
    "' WHERE id =" +
    data.id +
    ";";
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result.affectedRows);
  });
};

module.exports = {
  viewAll,
  viewById,
  //viewByFilter,
  addNewData,
  deleteById,
  upgrade
};