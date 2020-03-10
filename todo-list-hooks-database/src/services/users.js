export const getUsers = async () => {
    const url = 'http://localhost:5000/api/users/'
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    return data
  };
  
  export const saveUsers = async (mail, pass, name) => {
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mail: mail,
        pass: pass,
        name: name
      })
    });
  };