import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logoReact from "../../../assets/image/logoReact.png";

export const RegistroSesion = () => {

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link
                      to="/"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src={logoReact} alt="" />
                      <span className="d-none d-lg-block">Mintic 2022</span>
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
                      >
                        <div className="col-12">
                          <Form.Group controlId="nombreUsuario">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="nombreUsuario"
                              className="form-control"
                            />
                            <Form.Control.Feedback type="invalid">
                              Nombre es obligatorio
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="correoUsuario">
                            <Form.Label>Correo electrónico</Form.Label>
                            <div className="input-group has-validation">
                              <span className="input-group-text">@</span>
                              <Form.Control
                                required
                                type="email"
                                name="correoUsuario"
                                className="form-control"
                              />
                              <Form.Control.Feedback type="invalid">
                                correo electrónico es obligatorio
                              </Form.Control.Feedback>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="claveUsuario">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="claveUsuario"
                              className="form-control"
                              minLength={4}
                            />
                            <Form.Control.Feedback type="invalid">
                              Mínimo 4 caracteres
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="reClaveUsuario">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="reClaveUsuario"
                              className="form-control"
                            />
                            <Form.Control.Feedback type="invalid">
                              Contraseñas no coindicen
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Crear cuenta
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            ¿Ya tienes una cuenta?{" "}
                            <Link to="/login">Clic aquí</Link>
                          </p>
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
