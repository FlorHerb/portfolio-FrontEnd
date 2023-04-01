export class Proyecto {
    id?: number;
    nombre : string;
    anio: string;
    descripcion: string;
    img : string;
 

    constructor(nombre: string, anio:string, descripcion: string, img:string ){
        this.nombre=nombre;
        this.anio= anio;
        this.descripcion=descripcion;
        this.img= img;
       
    }

}
