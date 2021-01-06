import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AddQr = () => {
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
        <div>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Ej: Cerveza 2x1" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Destinatario</Form.Label>
              <Form.Control type="text" placeholder="Ej: Sara Gonzalez" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" />
            </Form.Group>
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
