import ApiBack from "../utilidades/dominios/ApiBack";

class ServicioPublico {
  public static async crearUsuario(miObjetoJson:any){
    const datosEnvio = {
       method:"POST",
       body: JSON.stringify(miObjetoJson),
       headers:{"Content-Type": "application/json; charset=UTF-8"}
       };
    const urlbackend = ApiBack.URL+ApiBack.CREAR_USUARIO;
    const respuesta = fetch(urlbackend, datosEnvio)
    .then((respuesta)=>respuesta.json())
    .then((datos)=>{datos})
    .catch((miError)=>{return miError;});

    return respuesta;
    };
  };


export default ServicioPublico;