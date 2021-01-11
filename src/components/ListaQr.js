import React from "react";
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
/* import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown"; */

const ListaQr = () => {
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
            checked={true}
          >
            Activos
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="secondary"
            name="radio"
            value="2"
            checked={false}
          >
            Quemados
          </ToggleButton>
        </ButtonGroup>
      </div>
      <div className="container mt-3">
        <CardColumns>
          <Card>
            <Card.Body className="d-md-flex justify-content-round align-items-center">
              <div className="col-12">
                <h3>Cerveza 2x1</h3>
                <h5>Destinatario: Silvia Perez</h5>
                <p>Descripcion: Promocion de 2 cervezas Groller</p>
                <p className="text-muted m-0">
                  <em>December 17</em>
                </p>
              </div>
              <div className="ml-md-1 mt-3 d-flex w-100">
                <ButtonGroup className="w-100 d-md-none">
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
          <Card>
            <Card.Body className="d-md-flex justify-content-round align-items-center">
              <div className="col-12">
                <h3>Cerveza 2x1</h3>
                <h5>Destinatario: Silvia Perez</h5>
                <p>Descripcion: Promocion de 2 cervezas Groller</p>
                <p className="text-muted m-0">
                  <em>December 17</em>
                </p>
              </div>
              <div className="ml-md-1 mt-3 d-flex w-100">
                <ButtonGroup className="w-100 d-md-none">
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

      {/* <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          <div className="align-middle h-100">Cerveza 2x1</div>
          <div>
            <DropdownButton variant="dark">
              <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Eliminar</Dropdown.Item>
              <Dropdown.Item>Quemar</Dropdown.Item>
              <Dropdown.Item>Informacion</Dropdown.Item>
            </DropdownButton>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <div className="align-middle h-100">Cerveza 2x1</div>
          <div>
            <DropdownButton variant="dark">
              <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Eliminar</Dropdown.Item>
              <Dropdown.Item>Quemar</Dropdown.Item>
              <Dropdown.Item>Informacion</Dropdown.Item>
            </DropdownButton>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <div className="align-middle h-100">Cerveza 2x1</div>
          <div>
            <DropdownButton variant="dark">
              <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Eliminar</Dropdown.Item>
              <Dropdown.Item>Quemar</Dropdown.Item>
              <Dropdown.Item>Informacion</Dropdown.Item>
            </DropdownButton>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <div className="align-middle h-100">Cerveza 2x1</div>
          <div>
            <DropdownButton variant="dark">
              <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Eliminar</Dropdown.Item>
              <Dropdown.Item>Quemar</Dropdown.Item>
              <Dropdown.Item>Informacion</Dropdown.Item>
            </DropdownButton>
          </div>
        </ListGroup.Item>
      </ListGroup> */}
    </div>
  );
};

export default ListaQr;
