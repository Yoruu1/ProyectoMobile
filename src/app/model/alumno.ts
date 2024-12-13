export class Alumno {
    id: number;   // Agregamos un id
    alumno: string;
    password: string;
  
    constructor(id: number, alumno: string, password: string) {
      this.id = id;
      this.alumno = alumno;
      this.password = password;
    }
}
