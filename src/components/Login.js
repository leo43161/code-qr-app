import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <div className="container">
      <Card className="col-12 mx-auto">
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu nombre de usuario" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Mantener sesion" />
            </Form.Group>
            <Button className="mb-2 w-100" variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
