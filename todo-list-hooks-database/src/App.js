//Importación 
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import SignIn from "./components/SignIn"
import {
  getUsers,
  saveUsers,
  editUsers,
  deleteUsers
} from "./services/users";
import {
  getTodos,
  saveTodos,
  editTodos,
  changeIsDone,
  deleteTodos
} from "./services/todos";
import ListsContainer from "./components/ListContainer";

const App = () => {
  const initialFormState = {
    title: "",
    description: ""
  };
  const initialSignInState={
    mail: "",
    pass: "",
    name: ""
  };

  //Hooks en los que se setea los estados, form y tasks
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [signIn, setSignIn] = useState(initialSignInState);

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, description } = form;
    if (form.id) {
      const newTasks = tasks.map(task => (task.id === form.id ? form : task));
      setTasks(newTasks);
      setForm(initialFormState);
      editTodos(form.id, form.title, form.description);
    } else if (title && description) {
      const task = {
        title,
        description
      };
      saveTodos(task.title, task.description);
      setTasks([...tasks, task]);
      setForm(initialFormState);
    }
  };
  useEffect(() => {
  getTodos().then(data => setTasks(data));
  }, []);

  const handleSubmitSignIn = e => {
    e.preventDefault();
    const { mail, pass, name } = signIn;
    if (signIn.id) {
      const newUsers = users.map(user => (user.id === signIn.id ? signIn : user));
      setUsers(newUsers);
      setSignIn(initialSignInState);
      //editTodos(form.id, form.title, form.description);
    } else if (mail && pass && name) {
      const user = {
        mail,
        pass,
        name
      };
      saveUsers(user.mail, user.pass, user.name);
      setUsers([...users, user]);
      setSignIn(initialSignInState);
    }
  };
  useEffect(()=>{
    getUsers().then(data=>setUsers(data));
  }, []);

  const handleChangeSignIn = e => {
    const value = e.target.value;
    const name = e.target.name;

    setSignIn({ ...signIn, [name]: value });
  };


  const changeTaskStatus = async task => {
    //pasa el id de la tarea que cambia el estado
    await changeIsDone(task.id).then(() =>
      getTodos().then(data => setTasks(data))
    );
  };
  const editTask = task => {
    setForm(task);
  };

  const editUser= user=>{
    setSignIn(user);
  };

  //Hace un delete de cierto task con el id de parametro, luego vuelve a setear el estado actualizado
  const deleteTask = async task => {
    await deleteTodos(task.id).then(() =>
      getTodos().then(data => setTasks(data))
    );
  };

  const deleteUser = async user => {
    await deleteUser(user.id).then(() =>
      getUsers().then(data => setUsers(data))
    );
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col mb-3">
          <SignIn onChange={handleChangeSignIn} onSubmit={handleSubmitSignIn} signIn={signIn} />
          <Form onSubmit={handleSubmit} onChange={handleChange} form={form} />
        </div>
        <ListsContainer
          tasks={tasks}
          editTask={editTask}
          changeTaskStatus={changeTaskStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
