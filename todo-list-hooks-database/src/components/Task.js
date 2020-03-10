import React from "react";
// import {
//   getAssignedUser,
//   assignUser,
//   unassignUser
// } from "../services/tasksXuser";


const Task = ({ task, onChangeState, onEditTask, onDeleteTask }) => {

  //const [assignedUser, setAssignedUser] = useState();

  return (
    <>
      <div className="card border-danger mb-3">
        <div className="card-header bg-transparent border-danger">{task.title}</div>
        <div className="card-body text-danger">
          <p className="card-text">{task.description}</p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <button
                className="btn btn-outline-success"
                onClick={() => onChangeState()}
              >
                {task.isDone ? "Reiniciar" : "Finalizar"}
              </button>
            </div>

            <div className="col-12 col-sm-6">
              <button
                className="btn btn-outline-primary float-right"
                onClick={() => onEditTask()}
              >
                Editar
              </button>
            </div>
            <div className="col-12 col-sm-12">
              <button className="btn btn-danger" onClick={() => onDeleteTask()}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
