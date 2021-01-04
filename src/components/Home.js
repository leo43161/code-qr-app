import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid border border-dark text-center p-3 center-item">
      <div>
        <h2>Code-QR-App</h2>
        <h5>Inicie sesion para continuar</h5>
      </div>
      <div className="mt-3">
        <Link to="/login" className="btn btn-primary">Iniciar Sesion</Link>
      </div>
    </div>
  );
};

export default Home;
