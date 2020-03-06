import React from "react";
import List from "./List";

const ListsContainer = ({ tasks, editTask, changeTaskStatus, deleteTask }) => {
  const pendingTasks = () => {
    return tasks.filter(task => !task.isDone);
  };

  const doneTasks = () => {
    return tasks.filter(task => task.isDone);
  };

  return (
    <>
      <div className="col">
        {pendingTasks().length > 0 ? (
          <List
            title="Pendientes"
            tasksList={pendingTasks()}
            onChangeTaskStatus={changeTaskStatus}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
          />
        ) : (
          <h3> Muy bien!! No tienes tareas pendientes </h3>
        )}
      </div>
      {doneTasks().length > 0 ? (
        <div className="col">
          <List
            title="Terminadas"
            tasksList={doneTasks()}
            onChangeTaskStatus={changeTaskStatus}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
          />
        </div>
      ) : null}
      {pendingTasks().length === tasks.length ||
      doneTasks().length === tasks.length ? null : (
        <div className="col">
          {tasks.length > 0 ? (
            <List
              title="Todas"
              tasksList={tasks}
              onChangeTaskStatus={changeTaskStatus}
              onEditTask={editTask}
            />
          ) : (
            <h3> No tienes tareas creadas </h3>
          )}
        </div>
      )}
    </>
  );
};

export default ListsContainer;
