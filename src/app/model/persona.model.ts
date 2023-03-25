export class Persona {
    id?: number;       //opcional
    nombre: string;
    apellido: string;
    img: string;
    ocupacion: string;
    ubicacion: string;

    constructor(nombre: string, apellido: string, img:string, ocupacion:string, ubicacion:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.ocupacion = ocupacion;
        this.ubicacion = ubicacion;
    }
}