import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {
    Redirect,
  } from "react-router-dom";

export default class Login extends React.Component {

    mail = React.createRef();
    password= React.createRef()
    
   
    login=(e)=>{
        e.preventDefault();
        if (this.mail.current.value && this.pass.current.value) {
            const user = {
                mail : this.mail.current.value,
                pass : this.pass.current.value
            }
            this.props.login(user);
        }
        e.currentTarget.reset();
        
    }

    render(){
        return (
            <div className='container' >
                <Form onSubmit={this.login} style={{padding: 80, marginTop:'5%'}}>
                <div className="row">
                    <div className="col-6">
                        <Form.Group>
                            <Form.Label>Mail</Form.Label>
                            <Form.Control ref={this.mail} type="email" placeholder="Ingrese su mail" id="mail"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control ref={this.password} type="password" placeholder="Ingrese su contraseña" id="pass"/>
                            <Form.Text className="text-muted">Nunca compartiremos tu contraseña con nadie más.</Form.Text>
                        </Form.Group>
                    </div>
                </div>
                <Button variant="success" type="submit">Iniciar sesión</Button>
                </Form>
            </div>
        );
    }
}