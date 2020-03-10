// //Muestra las que tiene asignada un cierto usuario

// export const getTasksUser = async id => {
//     let users = await fetch(`http://localhost:5000/api/tasksXuser/assigned/${id}`, {
//       method: "GET"
//     });
//     users = await users.json();
  
//     return users.results;
//   };

//   //Devuelve el usuario que está asignado a cierta tarea

//   export const getAssignedUser = async taskID => {
//     let response = await fetch(`http://localhost:5000/api/tasksXuser/getUserAssigned/${taskID}`, {
//       method: "GET"
//     });
//     result = await response.json();
  
//     return result;
//   };
  
  
//   export const assignUser = async assignedTask => {
//     if (assignedTask.userId === undefined) return;
//     else {
//       let response = await fetch(
//         `http://localhost:5000/api/tasksXuser/assign/taskID=${assignedTask.taskId}&userID=${assignedTask.userId}`,
//         {
//           method: "POST"
//         }
//       );
//       let result = await response.json();  
//       return result;
//     }
//   };
  
//   export const unassignUser = async assignedTask => {
//     let response = await fetch(
//       `http://localhost:5000/api/tasksXuser/unassign/taskID=${assignedTask.taskId}&userID=${assignedTask.userId}`,
//       {
//         method: "POST"
//       }
//     );
//     let result = await response.json();
  
//     return result;
//   };
  