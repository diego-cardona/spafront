export class Usuario {
    id: number;
    nombre: string;
    clave: string;
    fecha: string;



    constructor(id: number, nombre: string, clave: string, fecha: string) {
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
        this.fecha = fecha;
    }
}


