import React from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="container-fluid border border-dark text-center p-3 center-item">
      <div>
        <h2>Code-QR-App</h2>
        <h5>Inicie sesion para continuar</h5>
      </div>
      <div className="mt-3">
        <Button variant="primary">Iniciar Sesion</Button>
      </div>
    </div>
  );
};

export default Home;
