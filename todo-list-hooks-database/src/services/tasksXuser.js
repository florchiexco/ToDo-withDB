export const getAssignedUser = async id => {
    let users = await fetch(`http://localhost:5000/api/users/assigned/${id}`, {
      method: "GET"
    });
    users = await users.json();
  
    return users.results;
  };
  
  
  export const assignUser = async assignedTask => {
    if (assignedTask.userId === undefined) return;
    else {
      let response = await fetch(
        `http://localhost:5000/api/users/?taskID=${assignedTask.taskId}&userID=${assignedTask.userId}`,
        {
          method: "POST"
        }
      );
      let result = await response.json();
      // console.log("resultado", result);
  
      return result;
    }
  };
  
  export const unassignUser = async assignedTask => {
    let response = await fetch(
      `http://localhost:5000/api/users/?taskID=${assignedTask.taskId}&userID=${assignedTask.userId}`,
      {
        method: "DELETE"
      }
    );
    let result = await response.json();
  
    return result;
  };
  