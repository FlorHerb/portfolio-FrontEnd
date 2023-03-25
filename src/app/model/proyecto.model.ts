export class Proyecto {
    id?: number;
    nombre : string;
    descripcion: string;
    img : string;
    año: string;

    constructor(nombre: string, descripcion: string, img:string, año:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.img= img;
        this.año= año;
    }

}
