import React from 'react';

const SignIn = ({ onChange, onSubmit, signIn }) => {
    return (
      <div className="card border-sucess mb-3">
        <div className="card-header bg-transparent border-success">Nuevo usuario</div>
        <div className="card-body text-success">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="mail">Mail</label>
              <input
                type="text"
                className="form-control"
                name="mail"
                value={signIn.mail}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="pass">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="pass"
                value={signIn.pass}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={signIn.name}
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
  
  export default SignIn;
  