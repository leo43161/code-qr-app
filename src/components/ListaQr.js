import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const ListaQr = () => {
  return (
    <div>
      <h4 className="text-center text-white bg-dark m-0 py-2">
        Lista de QRs creados
      </h4>
      <ListGroup>
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
      </ListGroup>
    </div>
  );
};

export default ListaQr;
