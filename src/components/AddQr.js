import React, { useState } from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar una pagina
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
import Swal from "sweetalert2";

const AddQr = (props) => {
  const [informacion, setInformacion] = useState({
    titulo: "",
    destinatario: "",
    descripcion: "",
  });

  /* Tomar Fecha y Hora Actual */

  const getDate = () => {
    const now = new Date();
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const fecha = now.getDate() + " de " + meses[now.getMonth()];
    const hora = now.getHours() + ":" + now.getMinutes();
    console.log(fecha + " " + hora);
    return fecha + " " + hora;
  };

  /*  */

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInformacion({
      ...informacion,
      [e.target.name]: e.target.value,
    });
  };

  console.log(Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      informacion.titulo.trim() === "" ||
      informacion.descripcion.trim() === ""
    ) {
      setError(true);
      return;
    }

    const datos = {
      titulo: informacion.titulo,
      destinatario: informacion.destinatario,
      descripcion: informacion.descripcion,
      estado: true,
      creado: getDate(),
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      };
      const resultado = await fetch("http://localhost:3000/qrs", cabecera);
      if (resultado.status === 201) {
        Swal.fire(
          "Producto creado!",
          "El producto se creo correctamente!",
          "success"
        );
      }

      props.setRecargarQrs(true);
      /* //redireccionar al usuario
      props.history.push("/listaqr"); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="py-md-5 p-3 bg-dark w-100 d-flex flex-md-row align-items-md-center justify-content-md-around flex-column">
        <div className="col-md-5 p-0 text-md-center">
          <img
            src={process.env.PUBLIC_URL + "/img/codigo-qr.png"}
            className="img-fluid"
            alt="qr-img"
          />
          <div className="mt-3">
            <h4 className="text-center text-light mt-3">Compartir</h4>
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

        <div className="mt-2 col-12 col-md-5 p-0 mt-3 mt-md-0 card">
          <div className="p-3">
            <h3 className="text-center ">Informacion</h3>
            <p>
              <small>
                (<span className="text-danger">*</span>) Los campos son
                obligatorios.
              </small>
            </p>
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
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
                <Form.Group>
                  <Form.Label>Destinatario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Sara Gonzalez"
                    name="destinatario"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
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
      </div>
    </div>
  );
};

export default withRouter(AddQr);
