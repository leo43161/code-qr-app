import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faFireAlt,
  faEye,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const CodeQr = (props) => {
  return (
    <div>
      <Card className="mt-1">
        <Card.Body className="d-flex flex-column justify-content-round align-items-center">
          <div className="col-12 px-1">
            <h3>{props.qr.titulo}</h3>
            <h5>Destinatario: {props.qr.destinatario}</h5>
            <p>Descripcion: {props.qr.descripcion}</p>
            <p className="text-muted m-0">
              <em>{props.qr.creado}</em>
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
    </div>
  );
};

export default CodeQr;
