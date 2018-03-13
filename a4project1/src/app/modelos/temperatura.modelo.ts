export class Temperatura {
    public id: string;
    public nombreProv: string;
    public tempMedia: number;
    public year: string;
  
    constructor (id: string,
        nombreProv: string,
        tempMedia: number,
        year: string) {
                   this.id = id;
                   this.nombreProv = nombreProv;
                   this.tempMedia = tempMedia;
                   this.year = year;
    }
}