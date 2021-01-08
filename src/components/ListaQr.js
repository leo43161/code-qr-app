import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt,faFireAlt,faEye, faPrint } from "@fortawesome/free-solid-svg-icons";
/* import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown"; */

const ListaQr = () => {
  return (
    <div>
      <h4 className="text-center text-white bg-dark m-0 py-2">
        Lista de QRs creados
      </h4>
      <div className="container mt-3">
        <CardColumns>
          <Card>
            <Card.Body className="d-flex align-items-center">
              <div>
                <Card.Title>Cerveza 2x1</Card.Title>
                <p>Destinatario: Silvia Perez</p>
                <p>Descripcion: Promocion de 2 cervezas Groller</p>
                <p className="text-muted m-0">
                  <em>December 17</em>
                </p>
              </div>
              <div className="h-100">
                <ButtonGroup vertical>
                <Button variant="secondary"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button>
                <Button variant="secondary"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
                <Button variant="secondary"><FontAwesomeIcon icon={faFireAlt}></FontAwesomeIcon></Button>
                <Button variant="secondary"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>
                <Button variant="secondary"><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></Button>
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
