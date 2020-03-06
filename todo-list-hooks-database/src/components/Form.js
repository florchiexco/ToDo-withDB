import React from "react";

const Form = ({ onSubmit, onChange, form }) => {
  return (
    <div className="card border-sucess mb-3">
      <div className="card-header bg-transparent border-success">Nueva tarea</div>
      <div className="card-body text-success">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputTitle">Título</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={form.title}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={form.description}
              onChange={onChange}
            ></input>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
