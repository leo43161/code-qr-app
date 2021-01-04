import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const LogHome = () => {
  return (
    <div>
      <Jumbotron fluid className="m-0">
        <Container>
          <h2>Bienvenido Usuario</h2>
          <p>
            Esta aplicaion te permitira crear y administrar tus propios codigos
            QRs
          </p>
        </Container>
      </Jumbotron>
      <div className="d-flex justify-content-around m-0">
        <Link to="/login" className="btn btn-primary">
          Crear codigo QR
        </Link>
        <Link to="/login" className="btn btn-primary">
          Administrar codigos
        </Link>
      </div>
    </div>
  );
};

export default LogHome;
