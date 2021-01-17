import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faFireAlt,
  faEye,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const ListaQr = () => {
  const [QRsType, setQRsType] = useState(true);
  return (
    <div>
      <h4 className="text-center text-white bg-dark m-0 py-2">
        Lista de QRs creados
      </h4>
      <div className="px-3 w-100 mt-3">
        <ButtonGroup className="w-100" toggle>
          <ToggleButton
            type="radio"
            variant="secondary"
            name="radio"
            value="1"
            checked={QRsType === true}
            onChange={() => setQRsType(true)}
          >
            Activos
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="secondary"
            name="radio"
            value="2"
            checked={QRsType === false}
            onChange={() => setQRsType(false)}
          >
            Quemados
          </ToggleButton>
        </ButtonGroup>
      </div>
      <div className="container mt-3">
        <CardColumns>
          {/* 1 */}
          <Card>
            <Card.Body className="d-flex flex-column justify-content-round align-items-center">
              <div className="col-12 px-1">
                <h3>Cerveza 2x1</h3>
                <h5>Destinatario: Silvia Perez</h5>
                <p>Descripcion: Promocion de 2 cervezas Groller</p>
                <p className="text-muted m-0">
                  <em>December 17</em>
                </p>
              </div>
              <div className="ml-md-1 mt-3 d-flex w-100">
                <ButtonGroup className="w-100 d-flex flex-wrap">
                  <Button variant="dark">
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                  </Button>
                  <Button variant="success">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                  </Button>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                  </Button>
                  <Button variant="warning">
                    <FontAwesomeIcon icon={faFireAlt}></FontAwesomeIcon>
                  </Button>
                  <Button variant="danger">
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </div>
  );
};

export default ListaQr;
