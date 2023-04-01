export class Educacion {
    id?: number;
    nombreE : string;
    descripcionE: string;
    img : string;
    fecha_inicio: string;
    fecha_fin: string;
    institucion: string;

    constructor(nombre: string, descripcion: string, img:string, fecha_inicio:string, fecha_fin:string, institucion:string){
        this.nombreE=nombre;
        this.descripcionE=descripcion;
        this.img= img;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.institucion = institucion;
    }
}
