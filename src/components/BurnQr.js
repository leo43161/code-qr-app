import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const BurnQr = () => {
  const buttonHandler = (e) => {
    let nameButton = e.target.name === "burn";
    console.log(nameButton);
    Swal.fire({
      title: `Seguro que quieres ${
        nameButton ? "quemar" : "eliminar"
      }  el codigo QR?`,
      text: "No podras volver a utilizar el codigo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5DB660",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `${nameButton ? "Utilizado!" : "Eliminado!"}!`,
          `El codigo QR fue ${nameButton ? "utilizado" : "eliminado"}.`,
          "success"
        );
      }
    });
  };

  return (
    <div>
      <div className="py-md-5 p-2 bg-dark w-100 d-flex justify-content-center">
        <div className="mt-2 col-10 col-md-8 col-lg-5 p-0 pt-3 card bg-light">
          <div className="text-justify text-md-center px-3">
            <h2 className="text-center mb-3">Cerveza 2x1</h2>
            <h4>Destinatario: Silvia Perez</h4>
            <h5>Descripcion: Promocion de 2 cervezas</h5>
            <p className="text-muted text-md-center m-0">
              <em>Creado: 14 de Enero 05:01 </em>
            </p>
            <p className="text-muted text-md-center m-0">
              <em>
                Estado: <span className="text-primary">Activo</span>
              </em>
            </p>
          </div>
          <hr className="bg-dark" />
          <div>
            <h4 className="text-center mb-md-3">Acciones</h4>
            <div className="d-flex flex-wrap justify-content-around">
              <Button
                name="burn"
                className="col-md-5 col-10"
                onClick={buttonHandler}
                variant="warning"
                disabled={false}
              >
                <FontAwesomeIcon icon={faFireAlt} size="2x" />
              </Button>
              <Button
                name="delete"
                onClick={buttonHandler}
                className="col-md-5 col-10 mt-2 mt-md-0"
                variant="danger"
                disabled={false}
              >
                <FontAwesomeIcon icon={faTrashAlt} size="2x" />
              </Button>
            </div>
          </div>
          <hr className="bg-dark" />
          <div className="mb-4">
            <h4 className="text-center mb-md-3 text-danger ">
              <ins>ATENCION</ins>
            </h4>
            <div className="text-justify px-4">
              <h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae consequatur tempore nesciunt eligendi repudiandae?
                Voluptates explicabo repudiandae sapiente laudantium eveniet et
                soluta asperiores labore libero itaque
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnQr;
