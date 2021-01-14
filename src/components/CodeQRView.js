import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEdit,
  faTrashAlt,
  faFireAlt,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const CodeQRView = () => {
  return (
    <div>
      <div className="py-md-5 p-3 bg-dark w-100 d-flex flex-md-row align-items-md-center justify-content-md-around flex-column">
        <div className="col-md-5 p-0 text-md-center">
          <img
            src={process.env.PUBLIC_URL + "/img/codigo-qr.png"}
            className="img-fluid"
            alt="qr-img"
          />
        </div>

        <div className="mt-2 col-12 col-md-5 p-0">
          <div className="text-justify text-md-center text-light mb-2">
            <h2 className="text-center">Cerveza 2x1</h2>
            <h4>Destinatario: Silvia Perez</h4>
            <h5>Descripcion: Promocion de 2 cervezas</h5>
            <p className="text-muted text-center m-0">
              <em>Creado: 14 de Enero 05:01 </em>
            </p>
          </div>
          <hr className="bg-light" />
          <div>
            <h4 className="text-center text-light mb-md-3">Acciones</h4>
            <div className="d-flex justify-content-around">
              <Button variant="success" disabled={false}>
                <FontAwesomeIcon icon={faEdit} size="2x" />
              </Button>
              <Button variant="primary" disabled={false}>
                <FontAwesomeIcon icon={faPrint} size="2x" />
              </Button>
              <Button variant="warning" disabled={false}>
                <FontAwesomeIcon icon={faFireAlt} size="2x" />
              </Button>
              <Button variant="danger" disabled={false}>
                <FontAwesomeIcon icon={faTrashAlt} size="2x" />
              </Button>
            </div>
          </div>
          <hr className="bg-light" />
          <div className="mb-4">
            <h4 className="text-center text-light mb-md-3">Compartir</h4>
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
      </div>
    </div>
  );
};

export default CodeQRView;
