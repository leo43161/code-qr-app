import React, { useEffect, useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import CodeQr from "./CodeQr";

const ListaQr = (props) => {
  const [QRsType, setQRsType] = useState(true);
  const [qrsFiltrados, setQrsFiltrados] = useState([]);
  
  useEffect(() => {
    const codigosQr = props.codigosQr;
    let filtrarCodigos = codigosQr.filter((qr) => {
      if (QRsType) {
        return qr.estado === true;
      } else {
        return qr.estado === false;
      }
    });
    setQrsFiltrados(filtrarCodigos);
    console.log(filtrarCodigos);
  }, [QRsType, props.codigosQr]);

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
          {qrsFiltrados.map((qr) => (
            <CodeQr
              key={qr.id}
              setRecargarQrs={props.setRecargarQrs}
              qr={qr}
            ></CodeQr>
          ))}
        </CardColumns>
      </div>
    </div>
  );
};

export default ListaQr;
