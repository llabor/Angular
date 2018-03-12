export class Alumno {
  public id: number;
  public nombre: string;
  public apellidos: string;
  public ciudad: string;

  // Primer método que se lanza
  constructor (id: number,
               nombre: string,
               apellidos: string,
               ciudad: string) {
                 this.id = id;
                 this.nombre = nombre;
                 this.apellidos = apellidos;
                 this.ciudad = ciudad;
                // console.log(nombre);
  }
}
