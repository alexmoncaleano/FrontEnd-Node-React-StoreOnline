class CrearUsuario {
    public nameUser: string;
    public emailUser: string;
    public passwordUser: string;
  
    constructor(nom: string, cor: string, cla: string) {
      this.nameUser = nom;
      this.emailUser = cor;
      this.passwordUser = cla;
    }
  }
  
  export default CrearUsuario;
  