import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logouno from "../../../assets/image/logouno.png";
import { useState } from 'react';
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import CrearUsuario from "../../modelos/CrearUsuario";
import ServicioPublico from "../../servicios/ServicioPublico";


export const RegistroSesion = () => {
  type formularioHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso]=useState<boolean>(false);
  let { nameUser, emailUser, passwordUser, dobleEnlace, objeto}
  = useFormulario <CrearUsuario>(new CrearUsuario("","",""));

  const verficarFormulario = async (fh:formularioHtml)=>{
    fh.preventDefault();
    setEnProceso(true);
    const formularioActual = fh.currentTarget;

    formularioActual.classList.add("was-validated");
    if(formularioActual.checkValidity() === false){
      fh.preventDefault();
      fh.stopPropagation();
    }else{
      const respuestaBackEnd = await ServicioPublico.crearUsuario(objeto);
      console.log(respuestaBackEnd);
    }

  };

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register d-flex flex-column align-items-center justify-content-center py-1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-8 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-1">
                    <Link
                      to="/"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src={logouno} alt="" />
                      <span className="d-none d-lg-block"></span>
                    </Link>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Crear cuenta
                        </h5>
                        <p className="text-center small">
                          Complete la siguiente información personal
                        </p>
                      </div>

                      <Form
                        noValidate
                        className="row g-3"
                        validated={enProceso}
                        onSubmit={verficarFormulario}
                      >
                        <div className="col-6">
                          <Form.Group controlId="nameUser">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="nameUser"
                              className="form-control"
                              value={nameUser}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              Nombre es obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-6">
                          <Form.Group controlId="emailUser">
                            <Form.Label>Correo electrónico</Form.Label>
                            <div className="input-group has-validation">
                              <span className="input-group-text">@</span>
                              <Form.Control
                                required
                                type="email"
                                name="emailUser"
                                className="form-control"
                                value={emailUser}
                                onChange={dobleEnlace}
                              />
                              <Form.Control.Feedback type="invalid">
                                correo electrónico es obligatorio
                              </Form.Control.Feedback>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="col-6">
                          <Form.Group controlId="passwordUser">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="passwordUser"
                              className="form-control"
                              minLength={4}
                              value={passwordUser}
                              onChange={dobleEnlace}
                            />
                            <Form.Control.Feedback type="invalid">
                              Mínimo 4 caracteres
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-6">
                          <Form.Group controlId="rePasswordUser">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="rePasswordUser"
                              className="form-control"
                              pattern = {passwordUser}
                            />
                            <Form.Control.Feedback type="invalid">
                              Contraseñas no coindicen
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="row justify-content-center mt-3">
                        <div className="col-8">
                          <button
                            className="btn btn-primary w-100 center"
                            type="submit"
                          >
                            Crear cuenta
                          </button>
                        </div>
                        <div className="col-5">
                          <p className="small mb-0 text-center">
                            ¿Ya tienes una cuenta?{" "}
                            <Link to="/login">Clic aquí</Link>
                          </p>
                        </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};
