import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AddQr = () => {
  const [informacion, setInformacion] = useState({
    titulo: "",
    destinatario: "",
    descripcion: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInformacion({
      ...informacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      informacion.titulo.trim() === "" ||
      informacion.descripcion.trim() === ""
    ) {
      setError(true);
    }else{
      setError(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="p-3 bg-dark">
        <img
          src={process.env.PUBLIC_URL + "/img/codigo-qr.jpg"}
          className="img-fluid"
          alt="qr-img"
        />
        <div className="mt-2">
          <h4 className="text-center text-light">Compartir</h4>
          <div className="d-flex justify-content-around">
            <Button variant="light" disabled={false}>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </Button>
            <Button variant="light" disabled={false}>
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </Button>
            <Button variant="light" disabled={false}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Button>
            <Button variant="light" disabled={false}>
              <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-center">Informacion</h3>
        <p>
          <small>
            (<span className="text-danger">*</span>) Los campos son
            obligatorios.
          </small>
        </p>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Título <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Cerveza 2x1"
                required
                name="titulo"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Destinatario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Sara Gonzalez"
                name="destinatario"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Descripción <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder=""
                required
                name="descripcion"
                onChange={handleChange}
              />
            </Form.Group>
            {error ? (
              <Alert variant="warning">
                No llenaste todos los campos obligatorios (
                <span className="text-danger">*</span>)
              </Alert>
            ) : null}

            <Button variant="dark" className="w-100" type="submit">
              Crear
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddQr;
